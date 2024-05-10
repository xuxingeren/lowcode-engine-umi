import CustomSetterSamplePlugin from '@/plugins/plugin-custom-setter-sample';
import DefaultSettersRegistryPlugin from '@/plugins/plugin-default-setters-registry';
import SaveSamplePlugin from '@/plugins/plugin-save-sample';
import { plugins } from '@alilc/lowcode-engine';
import CodeEditorPlugin from '@alilc/lowcode-plugin-code-editor';
// import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator';
import ComponentPanelPlugin from '@alilc/lowcode-plugin-components-pane';
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane';
import InjectPlugin from '@alilc/lowcode-plugin-inject';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop';
// import SimulatorResizerPlugin from '@alilc/lowcode-plugin-simulator-select';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';

export default async function registerPlugins() {
  await plugins.register(InjectPlugin);

  // 设置内置 setter 和事件绑定、插件绑定面板
  await plugins.register(DefaultSettersRegistryPlugin);

  await plugins.register(ComponentPanelPlugin);

  await plugins.register(SchemaPlugin);

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin);

  await plugins.register(SetRefPropPlugin);

  // await plugins.register(SimulatorResizerPlugin);

  // 插件参数声明 & 传递，参考：https://lowcode-engine.cn/site/docs/api/plugins#设置插件参数版本示例
  await plugins.register(DataSourcePanePlugin);

  await plugins.register(CodeEditorPlugin);

  // 注册出码插件
  // await plugins.register(CodeGenPlugin);

  await plugins.register(SaveSamplePlugin);

  await plugins.register(CustomSetterSamplePlugin);
}
