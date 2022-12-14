import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is an any notification content',
      category: 'any_category',
      recipientId: 'any_recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
