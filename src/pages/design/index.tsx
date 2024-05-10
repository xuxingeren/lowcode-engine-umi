import { config, material, plugins, project } from '@alilc/lowcode-engine';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import { useLocation } from '@umijs/max';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import EditorView from './EditorView';
import assets from './assets.json';
import registerPlugins from './registerPlugins';

const Design: FC = () => {
  const [inited, setInited] = useState(false);
  const location = useLocation();

  const uploadAssets = async (assets: any) => {
    try {
      await material.setAssets(await injectAssets(assets));
      material.refreshComponentMetasMap();
    } catch (error) {
      console.log(error);
    }
  };

  const init = async () => {
    if (plugins?.has('DefaultSettersRegistryPlugin')) {
    } else {
      config.setConfig({
        enableCondition: true,
        enableCanvasLock: true,
        // 默认绑定变量
        supportVariableGlobally: true,
        // requestHandlersMap: {
        //   fetch: createFetchHandler()
        // },
      });
      await uploadAssets(assets);
      await registerPlugins();
      project.openDocument({
        componentName: 'Page',
        fileName: 'samle',
      });
    }

    setInited(true);
  };

  useEffect(() => {
    init().catch((err) => {
      console.log(err);
    });
  }, [location]);

  return <div id="lce-container">{inited ? <EditorView /> : null}</div>;
};

export default Design;
