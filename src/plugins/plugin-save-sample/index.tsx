import { Button } from '@alifd/next';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';

// 保存功能示例
const SaveSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, hotkey, config } = ctx;
      const scenarioName = config.get('scenarioName');

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button>保存到本地</Button>,
      });
      skeleton.add({
        name: 'resetSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button>重置页面</Button>,
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
      });
    },
  };
};
SaveSamplePlugin.pluginName = 'SaveSamplePlugin';

export default SaveSamplePlugin;
