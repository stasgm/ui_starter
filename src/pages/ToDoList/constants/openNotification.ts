import { notification } from 'antd';

export const openNotification = (placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight', text: string) => {
  notification.info({
    message: `${text}`,
    placement,
  });
};
