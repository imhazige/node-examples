<template>
    <div class="wrapper">
          <Header class="main-header">
            <NavBar />
          </Header>

          <SideBar />  
          <nuxt/>

          <Footer/>
    </div> 
</template>

<script>
import Header from "~/components/Header.vue";
import NavBar from "~/components/NavBar.vue";
import SideBar from "~/components/SideBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
        // }
      ],
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
<style>
/* to set style for the additional wrapper element created by nuxt */
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
</style>