import { common, plugins } from '@alilc/lowcode-engine';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const Workbech = common.skeletonCabin.Workbench;
const pluginPreference = new Map();
pluginPreference.set('DataSourcePane', {
  importPlugins: [],
  dataSourceTypes: [
    {
      type: 'fetch',
    },
    {
      type: 'jsonp',
    },
  ],
});

const EditorView: FC = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    plugins
      .init(pluginPreference)
      .then(() => {
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? <Workbech /> : null;
};

export default EditorView;
