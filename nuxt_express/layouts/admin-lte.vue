<template>
    <div class="wrapper">
          <header class="main-header">
            <!-- Logo -->
            <a href="../../index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>LTE</span>
            </a>

            <NavBar />
          </header>

          <SideBar />  
          <nuxt/>

          <Footer/>
    </div> 
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import SideBar from "~/components/SideBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    SideBar,
    Footer
  },

  //see https://nuxtjs.org/api/pages-head
  head() {
    return {
      title: "My Titile",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ],
      //you have to specify the absolute path(or in the static folder) of the css in this way
      //see https://nuxtjs.org/guide/assets
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      //see https://github.com/nuxt/nuxt.js/issues/188
      bodyAttrs: {
        class: "hold-transition skin-blue sidebar-mini"
      }
    };
  }
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="admin-lte/dist/css/AdminLTE.css"></style>
<style src="admin-lte/dist/css/skins/skin-blue.min.css"></style>
<style src="~/assets/css/googlefont1.css"></style>