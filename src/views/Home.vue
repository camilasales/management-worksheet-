<template>
<div>
  <menuTop class="mb-12"></menuTop>
  <v-spacer class="mb-12"></v-spacer>
  <div class="home" >
    <!-- inicio com imagem -->
    <div id="section1"  class="d-flex justify-end " :class="$vuetify.breakpoint.smAndDown ? 'mx-1 pl-6' : 'mx-4 pl-10' " style="background-color: #161840;">
      <v-img
      class=" px-10 d-flex align-center"
      :src="require('@/assets/img/inicial1.png')"
      jumbotron
    >
      <v-row>
          <v-col cols="12" lg="10" md="10" sm="12">
            <h3 class="title-first">PLANILHA DE GESTÃO</h3>
            <p class="sub-title-big">PARA ARQUITETOS, ENGENHEIROS E DESIGNERS DE INTERIORES</p>
            <hr class="my-1 line">
            <p class="sub-title-big">TODA GESTÃO DO SEU ESCRITÓRIO EM UM ÚNICO</p>
            <p class="sub-title-big">DOCUMENTO</p>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <!-- inicio com imagem fim -->

    <!-- sobre o que e -->
    <div id="section2" >
      <!-- titulo sobre o que e -->
      <v-row style="background-color: #161840;" class="d-flex justify-center align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 py-3' : 'ma-4 py-8' ">
        <div >
            <p class="title-topcs ma-0">O QUE É A PLANILHA DE GESTÃO?</p>
            <hr class="mt-1 line">
        </div>
      </v-row>
      <!-- texto sobre o que e -->
      <v-row class="d-flex justify-center align-center " :class="$vuetify.breakpoint.smAndDown ? 'ma-1 py-1' : 'ma-2 py-8'">
        <v-col cols="10">
          <p class="text-description-big" :class="$vuetify.breakpoint.smAndDown ? 'mb-2' : 'mb-6'">
            Nós sabemos como é difícil, como autônomos, gerir o nosso escritório e ainda realizar os projetos.
            Muitas vezes fazemos essas duas funções sozinho ou com uma equipe bem reduzida. 
            Isso acaba prejudicando nosso desempenho nas duas áreas e não temos a ideia se nossa 
            empresa está lucrando ou nos dando prejuízos.
          </p>
          <p class="text-description-big" :class="$vuetify.breakpoint.smAndDown ? 'mb-2' : 'mb-6'">
            Nossa planilha possibilita o gerenciamento de clientes, 
            fornecedores, planejamento e relatórios financeiros. Além de você conseguir 
            planejar e monitorar todos os custos e despesas da sua empresa, você também 
            consegue criar orçamentos de projetos com base nesses custos aumentando a sua produtividade. 
          </p>
          <p class="text-description-big" >
            Todos esses benefícios em um único e simples arquivo, sem necessidade de programação, 
            sem mensalidade e com atualizações gratuitas. 
          </p>
        </v-col>
      </v-row>
      <!-- texto sobre o que e fim -->
    </div>
    <!-- sobre o que e fim -->
    
    <!-- para quem e a planilha -->
    <v-row  id="section3" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-5' : 'ma-4 px-10'" style="background-color: #ffd65b;" >
      <v-col cols="6" class="pa-0">
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          :src="require('@/assets/img/paraQuem.png')"
          jumbotron
          class="pr-0"
          >
        </v-img>
      </v-col>
      <v-col  cols="12" lg="6" md="6" sm="12" class="px-5" style="background-color: #ffffff;">
        <p class="title-topcs ma-0" style="color: #1f2c30">PARA QUEM É A PLANILHA?</p>
        <hr class="my-1 line">
        <ul :class="$vuetify.breakpoint.smAndDown ? 'mt-4' : 'mt-8'">
          <li class="text-description-big"  :class="$vuetify.breakpoint.smAndDown ? 'mb-2' : 'mb-6'">
            Arquitetos, designer de interiores e engenheiros que trabalham com projetos;
          </li>
          <li class="text-description-big"  :class="$vuetify.breakpoint.smAndDown ? 'mb-2' : 'mb-6'">
            Profissionais que estejam iniciando na carreira sem experiência em gerenciamento, 
            orçamentos e fluxo financeiro;
          </li>
          <li class="text-description-big"  :class="$vuetify.breakpoint.smAndDown ? 'mb-2' : 'mb-6'">
            Para autônomos que  gerenciam seu próprio negócio;
          </li>
          <li class="text-description-big"  :class="$vuetify.breakpoint.smAndDown ? 'mb-3' : 'mb-16'">
            Para quem deseja elaborar orçamentos de projetos com base em custos, despesas e horas trabalhadas.
          </li>
        </ul>
        <v-col cols="12" lg="10" md="10" sm="10" class="d-flex flex-row justify-center align-center pb-0" >
         <img
          :height="$vuetify.breakpoint.smAndDown ? '30px' : ''"
          :src="require('@/assets/img/seta-escura.png')"
          >
          <a class="link-planilha " :class="$vuetify.breakpoint.smAndDown ? 'px-6 py-3' : 'px-12 py-5'" href="https://pay.hotmart.com/G43462139J?checkoutMode=2" target="_blank" rel="noopener noreferrer">
              <span >GARANTA A</span><br>
              <span>SUA PLANILHA</span>
          </a>
        </v-col>
      </v-col>
    </v-row>
    <!-- para quem e a planilha fim -->

    <!-- quem somos -->
    <v-row id="section4"  class="div-back-section4 " :class="$vuetify.breakpoint.smAndDown ? 'ma-1 pl-5 mb-2' : 'ma-4 pl-4 mb-10'" style="background-color: #161840">
      <div class="color-back-section4" style="background-color: #ffffff;" :class="$vuetify.breakpoint.smAndDown ? 'pl-3' : 'pl-8'" >
        <v-col class="px-0" style="background-color: #ffffff;">
            <p class="title-topcs ma-0" style="color:#1f2c30">QUEM SOMOS?</p>
            <hr class="my-1 line">
        </v-col>

        <div style="background-color: #161840;" :class="$vuetify.breakpoint.smAndDown ? 'py-2' : 'py-14'">
          <v-col cols="8" lg="8" md="8" >
            <p class="text-description-small mb-1" style="color: #ffffff;" >
              Eduardo Pezzinatto é Engenheiro Civil pela Universidade Estadual de Maringá (UEM) e 
              desenvolvedor de programas em Excel®️. Letícia Vaz é Arquiteta e Urbanista pelo Centro 
              Universitário FIAM-FAAM e sócia proprietária do Studio LL Arquitetura. 
            </p>
            <p class="text-description-small mb-1" style="color: #ffffff;" >
              O desenvolvimento deste produto surgiu da necessidade da Letícia, como dona do seu próprio 
              negócio, em organizar e consolidar as informações do seu escritório em um único lugar, 
              sem precisar gastar muitos recursos para  a implementação de um sistema de gerenciamento 
              ou perder tempo procurando as informações de clientes e fornecedores.
            </p>
            <p class="text-description-small mb-1" style="color: #ffffff;" >
              O desenvolvimento deste produto surgiu da necessidade da Letícia, 
              como dona do seu próprio negócio, em organizar e consolidar as informações 
              do seu escritório em um único lugar, sem precisar gastar muitos recursos para  a
              implementação de um sistema de gerenciamento ou perder tempo procurando as 
              informações de clientes e fornecedores.
            </p>
          </v-col>
        </div>
      </div>
      <div class="img-back-section4">
        <v-img
        :src="require('@/assets/img/eduele.png')"
        jumbotron
        >
          
        </v-img>
      </div>
    </v-row>
 
    <!-- section beneficios -->
    <div id="section5"  style="background-color: #1f2c30;" class="d-flex flex-column justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-14 ' : 'ma-4 px-10 '">
      <div :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-10' ">
          <p class="title-topcs ma-0">BENEFÍCIOS</p>
          <hr class="my-1 line">
      </div>

      <v-row class="d-flex flex-row justify-space-around align-center py-0" >
        <v-col cols="4" lg="3" md="3" sm="4" class="d-flex flex-column align-center justify-center py-0">
          <img
          class="img-benefits"
          :src="require('@/assets/img/icon1.png')"
          />
          <p class="sub-title-small">Gestão do seu negócio</p>
          <p class="text-description-small" style="text-align: center; color: #ffffff">
            Gestão de clientes e fornecedores,  além de controle financeiro e orçamentário
          </p>
        </v-col>

        <v-col cols="4" lg="3" md="3" sm="4" class="d-flex flex-column align-center justify-center py-0">
          <img
          class="img-benefits"
          :src="require('@/assets/img/icon2.png')"
          />
          <p class="sub-title-small" >Indicadores de crescimento da empresa</p>
          <p class="text-description-small" style="text-align: center; color: #ffffff">
            Visualização da situação financeira mensal e anual do seu negócio
          </p>
        </v-col>

        <v-col cols="4" lg="3" md="3" sm="4" class="d-flex flex-column align-center justify-center py-0">
          <img
          class="img-benefits"
          :src="require('@/assets/img/icon3.png')"
          />
          <p class="sub-title-small" >Acesso Vitalício</p>
          <p class="text-description-small" style="text-align: center; color: #ffffff">
            Sem anuidades, sem taxas e acesso gratuito a novas atualizações
          </p>
        </v-col>
      </v-row>
      <v-col :class="$vuetify.breakpoint.smAndDown ? 'py-2 mt-5' : 'py-4 mt-10'" style=" background-color: #ffd65b;">
        <v-spacer></v-spacer>
      </v-col>
    </div>
    <!-- section beneficios -->

    <!-- o que tem na planilha  -->
    <div id="section6" >
      <!-- o que tem na planilha titulo -->
      <v-row style="background-color: #161840;" class="d-flex justify-center align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 py-3' : 'ma-4 py-8'">
        <div>
            <p class="title-topcs ma-0">O QUE TEM NA PLANILHA?</p>
            <hr class="my-1 line">
        </div>
      </v-row>
      <!-- texto sobre o que tem -->
      <v-row no-gutters class="d-flex justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 py-2' : 'ma-2 py-8'">
        <v-col cols="5">
          <ul>
            <li class="text-description-small mb-1">
              Formulário para cadastro de clientes e fornecedores;
            </li>
            <li class="text-description-small mb-1">
              Acesso gratuito as atualizações;
            </li>
            <li class="text-description-small mb-1">
              Planilha financeira para custos e despesas;
            </li>
            <li class="text-description-small mb-1">
              Emissão de recibo automático para clientes e fornecedores por serviços prestados;
            </li>
          </ul>
        </v-col>
        <v-col cols="5">
          <ul>
            <li class="text-description-small mb-1">
              Modelo de etapas do seu projeto totalmente personalizável;
            </li>
            <li class="text-description-small mb-1">
              Modelo de despesas do seu escritório totalmente personalizável;
            </li>
            <li class="text-description-small mb-1">
              Calendário para eventos, compromissos importantes e aniversariantes do dia.
            </li>
          </ul>
        </v-col>
      </v-row>
      <!-- texto sobre o que tem fim-->
    </div>
    <!-- o que tem na planilha fim -->

    <!-- texto depoimentos -->
    <div id="section7" >
      <v-row style="background-color: #ffd65b;" class="d-flex justify-center align-center " :class="$vuetify.breakpoint.smAndDown ? 'ma-1 pt-4' : 'ma-4 pt-12'">
        <div>
            <p class="title-topcs ma-0" style="color: #1f2c30">DEPOIMENTOS</p>
            <hr class="my-1 line" style="background-color: #161840;">
        </div>
      </v-row>
      <v-row class="d-flex justify-space-around align-center ma-2" :class="$vuetify.breakpoint.smAndDown ? 'py-3' : 'py-8' ">
        <div class="div-back-section7">
          <v-card class="img-depoiment-section7" :width="$vuetify.breakpoint.smAndDown ? '220' : '400' ">
            <v-img
              class="img-depoiment"
              :src="require('@/assets/img/depoiment/dp-text1.png')"
            >
            </v-img>
          </v-card>
          <div class="mt-8 img-people-section7">
            <v-avatar :size="$vuetify.breakpoint.smAndDown ? '98' : '150' ">
              <img
              class="img-depoiment img-pelople-depoiment"
              alt="user"
              :src="require('@/assets/img/depoiment/dp1.jpg')"
              >
            </v-avatar>
            <p :class="$vuetify.breakpoint.smAndDown ? '' : 'ml-3'">
              Livia Oliveira
            </p>
          </div>
        </div>

        <div class="div-back-section7 ">
          <v-card class="img-depoiment-section7" :width="$vuetify.breakpoint.smAndDown ? '220' : '400' ">
            <v-img
              class="img-depoiment"
              :src="require('@/assets/img/depoiment/dp-text2.png')"
            >
            </v-img>
          </v-card>
          <div class="mt-8 img-people-section7 ">
            <v-avatar :size="$vuetify.breakpoint.smAndDown ? '98' : '150' ">
              <img
              class="img-depoiment img-pelople-depoiment"
              alt="user"
              :src="require('@/assets/img/depoiment/dp2.jpg')"
              >
            </v-avatar>
            <p :class="$vuetify.breakpoint.smAndDown ? '' : 'ml-3'">
              Júlia Andrade
            </p>
          </div>
        </div>

        <div class="div-back-section7 ">
          <v-card class="img-depoiment-section7" :width="$vuetify.breakpoint.smAndDown ? '220' : '400' ">
            <v-img
              class="img-depoiment"
              :src="require('@/assets/img/depoiment/dp-text3.png')"
            >
            </v-img>
          </v-card>
          <div class="mt-8 img-people-section7 ">
            <v-avatar :size="$vuetify.breakpoint.smAndDown ? '98' : '150' ">
              <img
              class="img-depoiment img-pelople-depoiment"
              alt="user"
              :src="require('@/assets/img/depoiment/dp3.jpg')"
              >
            </v-avatar>
            <p :class="$vuetify.breakpoint.smAndDown ? '' : 'ml-3'">
              Laís Campos
            </p>
          </div>
        </div>
      </v-row>
    </div>
    <!-- texto depoimentos fim -->

    <!-- preco planilha -->
    <div id="section8" style="background-color: #1f2c30;" class="d-flex flex-column justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-2' : 'ma-4 px-10'">
      <div class="my-5">
          <p class="title-topcs ma-0" style="text-shadow: black 0.1em 0.1em 0.2em;">FAÇA SUA INSCRIÇÃO</p>
      </div>
        <p class="text-description-big my-2" style="text-align: center; color: #ffffff">
          Clique no botão abaixo e receba sua planilha de gestão. <br>
          Comece hoje mesmo a investir no seu negócio.
        </p>
        <p class="text-description-big" style="text-align: center; color: #ffffff">
          Preço promocional de lançamento  <br>
          por tempo LIMITADO! <br>
        </p>
        <p class="text-description-big my-2" style="text-align: center; color: #ffffff; font-size: 4vw !important;">
          De <span style="text-decoration: line-through; text-decoration-color: #ed1c00a9;">197,90</span>  <br>
          por <span style="color:#4AE0E0; font-size: 4.5vw !important;">R$ 147,90</span>  <br>
          ou até 12x R$ 14,85
        </p>
        <v-col class="d-flex flex-row justify-center align-center mr-12" >
         <img
          :height="$vuetify.breakpoint.smAndDown ? '30px' : ''"
          :src="require('@/assets/img/seta-branca.png')"
          >
          <a class="link-planilha " :class="$vuetify.breakpoint.smAndDown ? 'px-6 py-3' : 'px-12 py-5'" 
          style="background-color: #ffd65b; color:#ffffff" href="https://pay.hotmart.com/G43462139J?checkoutMode=2" target="_blank" rel="noopener noreferrer">
              <span >GARANTA SUA</span><br>
              <span>PLANILHA</span>
          </a>
        </v-col>
        <v-col :class="$vuetify.breakpoint.smAndDown ? 'py-2 mt-5' : 'py-4 mt-10'" style=" background-color: #ffffff;">
          <v-spacer></v-spacer>
        </v-col>
    </div>
    <!-- preco planilha fim-->

    <!-- garantia  -->
    <div id="section9"  style="background-color: #161840;" class="d-flex flex-column justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-3 mt-2' : 'ma-4 px-10 mt-4'">
      <div :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-10' ">
          <p class="title-topcs ma-0">GARANTIA</p>
          <hr class="my-1 line">
      </div>

      <v-col class="d-flex flex-row justify-start align-center" style="background-color: #ffffff;">
        <v-avatar :size="$vuetify.breakpoint.smAndDown ? '80' : '250'">
          <img
          :src="require('@/assets/img/garantia.png')"
          >
        </v-avatar>
        <p class="sub-title-big px-3" style="text-align: justify; color: #161840; text-shadow:none">
          Nós confiamos na qualidade do nosso produto, então você tem uma garantia incondicional de 7 dias. 
          Isso significa que você pode cancelar, dentro desse prazo, a hora que quiser e receber 100% do seu dinheiro de volta.
        </p>
      </v-col>
      <p class="text-description-small " :class="$vuetify.breakpoint.smAndDown ? 'pa-3' : 'pa-8'" style="color:#ffffff">
        Você não precisa se justificar, nem apresentar um motivo. Durante os sete dias é só nos enviar um e-mail
        e a devolução de 100% do seu investimento será realizada dentro dos 20 dias seguintes.
      </p>
      <v-col :class="$vuetify.breakpoint.smAndDown ? 'py-2 mt-2' : 'py-4 mt-10'" style=" background-color: #ffd65b;">
        <v-spacer></v-spacer>
      </v-col>
    </div>
    <!-- garantia fim -->

    <!-- principais duvidas 1 -->
    <div id="section10" class="d-flex flex-column justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-5 mt-2 ' : 'ma-4 px-10 mt-4'">
      <div :class="$vuetify.breakpoint.smAndDown ? 'my-3' : 'my-10'">
          <p class="title-topcs ma-0" style="color: #1f2c30">PRINCIPAIS DÚVIDAS</p>
          <hr class="my-1 line">
      </div>
      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" >
          <span style="font-weight: bold;">
            A planilha funciona tanto em dispositivos com sistema operacional Windows quanto MacOS?
          </span>
          <br>
           A planilha funciona apenas em dispositivos com Sistema Operacional Microsoft Windows.
        </p>
      </v-col>
      
      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" >
          <span style="font-weight: bold;">
            A planilha funciona em todos os dispositivos móveis?
          </span>
          <br>
          Não, a planilha de gestão funciona apenas em desktops e notebooks.
        </p>
      </v-col>

      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" >
          <span style="font-weight: bold;">
            Por que há uma planilha de teste com data de validade e uma planilha final? 
          </span>
          <br>
          Com o intuito de garantir a exclusividade do produto e assistência a nossos clientes,
           a planilha de teste possui a data de validade de 7 dias. Após esse período deve ser 
           realizado um backup para armazenar todas as informações inseridas na planilha.  
           Passado o período de garantia será enviado por e-mail uma nova chave de ativação sem validade, 
           sendo essa a sua versão final. 
        </p>
      </v-col>
      <v-col :class="$vuetify.breakpoint.smAndDown ? 'py-2 mt-2' : 'py-4 mt-10'"  style=" background-color: #161840;">
        <v-spacer></v-spacer>
      </v-col>
    </div>
    <!-- principais duvidas 1 fim -->

    <!-- principais duvidas 2 -->
    <div style="background-color: #161840;" class="d-flex flex-column justify-space-around align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-5 mt-2 ' : 'ma-4 px-10 mt-4'">
      <div :class="$vuetify.breakpoint.smAndDown ? 'my-3' : 'my-10'">
          <p class="title-topcs ma-0" style="color: #ffffff">PRINCIPAIS DÚVIDAS</p>
          <hr class="my-1 line">
      </div>

      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" style="color: #ffffff;" >
          <span style="font-weight: bold;">
            E se eu trocar de dispositivo, posso solicitar um novo código?
          </span>
          <br>
          Você poderá solicitar um novo código gratuitamente a cada 3 anos a partir da data de compra. 
          Caso contrário terá que efetivar uma nova compra.
        </p>
      </v-col>
      
      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" style="color: #ffffff;" >
          <span style="font-weight: bold;">
            Como terei acesso a atualizações futuras?
          </span>
          <br>
          Quando a planilha tiver alguma atualização, será enviado no e-mail cadastrado na 
          compra a atualização da planilha gratuitamente. Todos os dados cadastrados poderão 
          ser exportados da versão desatualizada e importados na versão atualizada.
        </p>
      </v-col>

      <v-col class="d-flex flex-row justify-start pa-0 mb-2">
        <div>  
          <v-avatar class="px-1 pb-4" :size="$vuetify.breakpoint.smAndDown ? '20' : ''"  >
            <img
            :src="require('@/assets/img/check.png')"
            >
          </v-avatar>
        </div>
        <p class="text-description-big" style="color: #ffffff;">
          <span style="font-weight: bold;">
            Há alguma diferença de conteúdo entre a planilha de teste e a planilha final?
          </span>
          <br>
           Não, o conteúdo da planilha de teste é o mesmo que a planilha final.
        </p>
      </v-col>
      <v-col :class="$vuetify.breakpoint.smAndDown ? 'py-2 mt-2' : 'py-4 mt-10'" style=" background-color: #ffffff;">
        <v-spacer></v-spacer>
      </v-col>
    </div>
    <!-- principais duvidas 2 fim -->

    <!-- economize o seu tempo -->
    <v-row :class="$vuetify.breakpoint.smAndDown ? 'ma-1 px-5' : 'ma-4 px-10'" style="background-color: #161840;">
      <v-col cols="6" class="pa-0">
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          :src="require('@/assets/img/economize.png')"
          jumbotron
          class="pr-0"
          >
        </v-img>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" class="px-5 d-flex flex-column align-center" style="background-color: #ffffff;">
        <v-col class="d-flex flex-column justify-center align-center px-10">
          <p class="text-description-big" style="text-align: center; color:#161840">
            Economize o seu tempo, organize sua empresa e ganhe mais controle sobre o seu dinheiro. 
            <br>
            Clique no botão abaixo e garanta já sua planilha de gestão!
          </p>
          <a class="link-planilha " :class="$vuetify.breakpoint.smAndDown ? 'px-6 py-3 mt-3' : 'px-12 py-5 mt-10'"   
          style="background-color: #ffd65b; color:#ffffff" href="https://pay.hotmart.com/G43462139J?checkoutMode=2" target="_blank" rel="noopener noreferrer">
              <span >GARANTA A</span><br>
              <span>SUA PLANILHA</span>
          </a>
          <p class="text-description-big mt-2" style="text-align: center; color:#161840">
            Compre antes que a promoção acabe.
          </p>
        </v-col>
      </v-col>
    </v-row>
    <!-- economize o seu tempo fim -->

    <!-- duvidas -->
    <div id="section11"  class="d-flex flex-column justify-top align-center" :class="$vuetify.breakpoint.smAndDown ? 'ma-1 pr-8 mt-2 ' : 'ma-4 pr-12 mt-4 '" style="background-color: #ffd65b;">
      <v-img
      class=" px-10 d-flex align-center"
      :src="require('@/assets/img/duvidas2.png')"
      jumbotron
      >
        <v-row no-gutters align="center" class="mb-14">
          <v-col cols="8" lg="5" md="5" sm="8" class="mt-2">
            <p class="title-topcs ma-0" style="color: #ffffff">FICOU COM DÚVIDAS?</p>
            <hr class="my-1 line">
          </v-col>
          <v-col cols="12" class="mt-2">
            <p class="sub-title-big" style="text-shadow:none">FALA COM A GENTE, ESTAMOS TE ESPERANDO.</p>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-end">
          <div class="d-flex align-end flex-column">
            <p class="sub-title-small ma-0"  style="color: #ffd65b">E-MAIL</p>
            <p class="text-description-small"  style="color: #ffffff">suporte@planilhagestao.com.br</p>
          </div>
        </v-row>
        <br v-if="$vuetify.breakpoint.mdAndUp">
        <v-row class="d-flex justify-end mt-5">
          <div class="d-flex align-end flex-column">
            <p class="sub-title-small ma-0"  style="color: #ffd65b">WHATSAPP/TELEFONE</p>
            <p class="text-description-small"  style="color: #ffffff">(44) 99918-4432</p>
            <p class="text-description-small"  style="color: #ffffff">(11) 995162-5752</p>
          </div>
        </v-row>
        <br v-if="$vuetify.breakpoint.mdAndUp">
        <v-row class="d-flex justify-end" :class="$vuetify.breakpoint.smAndDown ? 'mt-5' : 'mt-10' " >
          <div >
            <p class="text-description-small"  style="color: #ffffff">@2020 todos os direitos reservados</p>
          </div>
        </v-row>
     
      </v-img>
    </div>
    <!-- duvidas fim -->
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import menuTop from '@/components/menuTop.vue';
export default {
  name: "Home",
   components:{
    menuTop
  },
};
</script>

<style scoped>
.line{
  height: 10px;
  background-color: #ffd65b; 
  border-style: none;
}
.title-first{
  color:#ffffff;
  /* clamp(5vw); */
  font-size: 6vw;
  text-shadow: black 0.1em 0.1em 0.2em;
  letter-spacing: 2px;
}
.sub-title-big{
  color:#ffffff;
  font-size: 2vw;
  text-shadow: black 0.1em 0.1em 0.2em;
  letter-spacing: 1px;
  margin: 0;
  font-family: 'Merriweather Sans', sans-serif;
}
.sub-title-small{
  font-size: 1.5vw;
  text-shadow: none;
  color: #ffd65b; 
  text-align: center;
  font-family: 'Merriweather Sans', sans-serif;
}
.title-topcs{
  color:#ffffff;
  font-size: 3vw;
  letter-spacing: 2px;
}
.text-description-big{
  font-size: 1.6vw;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  text-align: justify;
}
.text-description-small{
  font-size: 1.4vw;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  text-align: justify;
}

/* INICIO - sessao 3 para quem e a planilha */
.div-back-section3{
  /* display: grid;
  grid-template-columns: auto auto; */
  background-color: #ffd65b;
}
.link-planilha{
  background-color: #161840;
  border-radius: 10px;
  font-size: 1.6vw;
  letter-spacing: 1px;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: 'Merriweather Sans', sans-serif;
  text-align: center;
  margin: 0;
}
/* FIM - sessao 3 para quem e a planilha */

/* INICIO - sessao 4 quem somos */
.div-back-section4{
  display: grid;
  grid-template-columns: 20vw 30vw;
  grid-template-rows: auto auto;
  /* align-items: center; */
  justify-content: space-between;
  align-items: end;
  z-index:1;
}
.color-back-section4{
  grid-row: 1/1;
  grid-column: 1/span 2;
}
.img-back-section4{
  z-index:2;
  grid-row: 1/1;
  grid-column: 2/2;
  /* margin-left: 15rem; */
  padding-right: 2vw;
}
/* FIM - sessao 4 quem somos */

/* INICIO - sessao 7 depoimentos */
.div-back-section7{
  display: grid;
  grid-template-columns: 10fr 24.5fr;
  grid-template-rows: 1fr;
  justify-items: end;
  align-items: center;
  margin: 20px;
 
}
.img-depoiment-section7{
  grid-row: 1/1;
  grid-column: 1/span 2;
  z-index:1;
}
.img-people-section7{
  grid-row: 1/1;
  grid-column: 1/1;
  z-index:2;
  
}
.img-depoiment{
  border: 15px solid #161840; 
}
.img-pelople-depoiment{
  border-top: 10px solid #161840;
  border-bottom: 10px solid #161840;
  border-right: 10px solid #16184000;
  border-left: 10px solid #161840;
 
}
/* FIM - sessao 7 depoimentos */

@media screen and (max-width: 1000px) {
  .line{
    height: 5px;
  }
  .img-benefits{
    height: 120px;
  }
  
}
@media screen and (max-width: 600px) {
  .line{
    height: 3px;
  }
  .img-benefits{
    height: 60px;
  }
  .div-back-section7{
  display: grid;
  grid-template-columns: 8.9fr 18.5fr;
 
}
  .img-depoiment{
  border: 8px solid #161840; 
  }
  .img-pelople-depoiment{
    border-top: 6px solid #161840;
    border-bottom: 6px solid #161840;
    border-right: 6px solid #16184000;
    border-left: 6px solid #161840;
  
  }
}
</style>
