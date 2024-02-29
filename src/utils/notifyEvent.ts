import * as WebhookRepository from '../repositories/webhookRepository';

export const notifyEvent = async (id: number) => {
    try {
        const webhooks = await WebhookRepository.getByEvent(id);
        webhooks.map(async (webhook: any) => {
            const body = {
                content: `Notificacion de ${webhook.name}` 
            }
            const req = {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(body)
            }
            const res = await fetch(webhook.url, req);
            
            if (!res.ok) {
                console.log("Error al enviar el mensaje");
                return false;
            }

            console.log('Enviado exitosamente!')
        })
    } catch (error: any) {
        throw new Error(error.message);
    } 
}