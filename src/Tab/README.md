# BI-Tab

Tab 组件，提供一种默认样式，完全的自定义样式支持。

包含的组件：

```jsx
<Tab />;
<Tab.Context />;
<Tab.Group />;
<Tab.Pane />;
```

使用：

```jsx
// 最外层必须为 Tab.Context
<Tab.Context defaultLabel="first">
  <Tab label="first">first</Tab>
  <Tab label="second">second</Tab>

  <Tab.Pane id="first">your code</Tab.Pane>
  <Tab.Pane id="second">your code</Tab.Pane>
</Tab.Context>
```

```jsx
// 任意的布局支持
<Tab.Context>
  <Tab label="first">first</Tab>
  <div>
    <Tab label="second">second</Tab>
  </div>

  <div>
    <div>
      <Tab.Pane id="first">your code</Tab.Pane>
    </div>
    <Tab.Pane id="second">your code</Tab.Pane>
  </div>
</Tab.Context>
```

```jsx
// 默认样式
<Tab.Context>
  <Tab.Group>
    <Tab label="first">first</Tab>
    <Tab label="second">second</Tab>
  </Tab.Group>

  <div>
    <div>
      <Tab.Pane id="first">your code</Tab.Pane>
    </div>
    <Tab.Pane id="second">your code</Tab.Pane>
  </div>
</Tab.Context>
```
