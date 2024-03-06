<template>
    <div class="container">
        <h1>Produtos</h1>
        <hr />
        <FormTodo v-on:add-todo="addProduto"></FormTodo>
        <div class="list-group">
            <p v-if="produtos.length <= 0">Sem produtos...</p>
            <div v-else class="list-group-item" v-for="(produtos, index) in allProdutos" v-bind:key="index">
                <span class="produto_index">Produto: <strong>{{ produto.name }}</strong></span>
                <p>{{ produto.message }}</p>
                <div>
                    <a href="#" title="Excluir" v-on:click.prevent="removeProduto(index)">Excluir</a>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
import FormTodo from './FormTodo.vue';

export default {
    name: 'TelaProduto',
    props: {
        msg: String,
        FormTodo
    },
    data() {
    return {
      produtos: [
        {
            "name": "garrafa",
            "message": "garrafa termica"
        }
      ]
    }
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  },
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
}
</script>

<style>
/* css */
</style>