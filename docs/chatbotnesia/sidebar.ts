import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "chatbotnesia/chatbot-ai-server",
    },
    {
      type: "category",
      label: "Platform: Whatsapp",
      items: [
        {
          type: "doc",
          id: "chatbotnesia/get-device-broadcast-whatsapp-device-client-key-get",
          label: "Get Device",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chatbotnesia/get-webhook-logs-broadcast-whatsapp-webhook-logs-get",
          label: "Get Webhook Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chatbotnesia/get-broadcast-list-broadcast-whatsapp-logs-get",
          label: "Get Broadcast List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chatbotnesia/send-message-broadcast-whatsapp-send-message-post",
          label: "Send Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chatbotnesia/send-message-attachment-broadcast-whatsapp-send-attachment-post",
          label: "Send Message Attachment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chatbotnesia/webhook-tracking-broadcast-whatsapp-webhook-tracking-post",
          label: "WhatsApp Message Tracking Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chatbotnesia/webhook-incoming-broadcast-whatsapp-webhook-incoming-post",
          label: "WhatsApp Incoming Message Webhook",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Platform: Whatsapp Business API",
      items: [
        {
          type: "doc",
          id: "chatbotnesia/send-template-text-broadcast-whatsapp-bs-send-template-text-post",
          label: "Send Template Text",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chatbotnesia/send-message-template-media-broadcast-whatsapp-bs-send-template-media-post",
          label: "Send Message Template Media",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chatbotnesia/webhook-setting-update-platform-whatsapp-bs-setting-webhook-put",
          label: "Webhook Setting Update",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "chatbotnesia/root-get",
          label: "Cek status server",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
