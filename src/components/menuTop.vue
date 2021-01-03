<template>
  <v-card
  >
     <v-app-bar
      color="#ffffff"
      elevate-on-scroll
      fixed
      class="d-flex justify-start"
      dense
     >      
      <v-menu
        left
        bottom
      >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        
        <v-list class="pa-0" >
            <v-list-item class="dropdown" v-for="(item, index) in titles" :key="index" :to="{name: item.href}" >
              <v-list-item-title class="textItens">{{item.name}}</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-menu>
        <span style="font-family: 'Raleway', sans-serif;">Planilha de Gerenciamento</span>
    </v-app-bar>
  </v-card>
</template>
<script>

export default {
  data() {
    return {
      titles: [
        {
          name:"Início",
          href:"section1",
          target: 1
        },
        {
          name:"O que é",
          href:"section2",
          target: 700
        },
        {
          name:"Para que é",
          href:"section3",
          target: 1300
        },
        {
          name:"Quem somos",
          href:"section4",
          target: 88
        },
        {
          name:"Benefícios",
          href:"section5",
          target: 88
        },
        {
          name:"Funcionalidades",
          href:"section6",
          target: 88
        },
        {
          name:"Depoimentos",
          href:"section7",
          target: 88
        },
        {
          name:"Garanta sua planilha",
          href:"section8",
          target: 88
        },
        {
          name:"Garantia",
          href:"section9",
          target: 88
        },
        {
          name:"Dúvidas",
          href:"section10",
          target: 88
        },
        {
          name:"Contato",
          href:"section11",
          target: 88
        },
      ],
      target: 9999,
      computed: {
        target () {
          console.log("foi");
          const value = 'number'
          if (!isNaN(value)) return Number(value)
          else return value
        },
        options () {
          return {
            duration: 300,
            offset: 0,
            easing:'easeInOutCubic'
          }
        },
        element () {
          if (this.selected === 'Button') return this.$refs.button
          else if (this.selected === 'Radio group') return this.$refs.radio
        }
      }
    };
  },
  directives: {
    hello: {
      inserted() {
        console.log(`inserted...`);
      },
      componentUpdated() {
        console.log(`componentUpdated....`);
      }
    }
  },
};
</script>
<style scoped>
.textItens {
  color: #000000 !important;
  text-decoration: none;
  font-family: 'Raleway', sans-serif !important;
}
.dropdown{
  background-color: #ffffff;
}
.dropdown:hover {
  background-color: #0000002d;
}
</style>


