import dayjs from 'dayjs'

import { createRequire } from 'module';
import Subscription from '../models/subscription.model.js';
const require = createRequire(import.meta.url);

const { serve } = require('@upstash/workflow/express');

// Reminders array for the number of days
const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve( async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status !== 'active' ) return;

    const renewalDate = dayjs(subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for the subscription ${subscriptionId}. Stopping workflowClient.`  )
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
        // e.g. renewal date = 22 March, reminderDate = 15 March, 17, 20, 21

        if(reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }

        await triggerReminder(context, `´Reminder ${daysBefore} days before.`)
    }
});

// Function to check the active subscription.
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder ar ${date}`);
    await context.sleepUntil(label, date.toDate());
}

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
        // Send email, SMS, push notifications or implement any algorithmic logic....
    })
}