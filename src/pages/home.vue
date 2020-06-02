<template>
  <f7-page name="home">
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title-large>Hello</f7-nav-title-large>
    </f7-navbar>
    <f7-block-title>Actions </f7-block-title>
    <f7-list>
      <f7-list-item link="/todos/" title="Todos"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

