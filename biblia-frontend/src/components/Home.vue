<template>
   <div class="container">
     
     
     <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Velho Testamento</h3>
      </div>
      <div class="panel-body">
         <a class="btn btn-default" href="#" v-for="livro in livrosAT">{{livro.nome}}</a>
      </div>
    </div>
    
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Novo Testamento</h3>
      </div>
      <div class="panel-body">
         <a class="btn btn-default" href="#" v-for="livro in livrosNT">{{livro.nome}}</a>
      </div>
    </div>
     
     
   </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      livrosAT: [],
      livrosNT: []
    }
  },
  methods: {
    loadLivros (testamento) {
      this.$http.get('http://localhost:9090/api/livros/', {
        params: {
          testamento: testamento
        }
      })
        .then(function (response) {
          if (testamento === 'VELHO') {
            this.livrosAT = response.body
          } else {
            this.livrosNT = response.body
          }
        })
    }
  },
  beforeCreate: function () {
    window.alert('Before Create!')
  },
  created: function () {
    window.alert('Create!')
    this.loadLivros('VELHO')
    this.loadLivros('NOVO')
  },
  beforeMount: function () {
    window.alert('Before Mount!')
  },
  mounted: function () {
    window.alert('Mounted!')
  },
  beforeUpdate: function () {
    window.alert('Before Update!')
  },
  updated: function () {
    window.alert('Updated!')
  },
  activated: function () {
    window.alert('Activated!')
  },
  deactivated: function () {
    window.alert('Deactivated!')
  },
  beforeDestroy: function () {
    window.alert('Before Destroy!')
  },
  destroyed: function () {
    window.alert('Destroyed!')
  }
}
</script>