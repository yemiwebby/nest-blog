<template>
   <div>
        <div class="col-md-8 col-md-offset-4">
          <h2> Create Post </h2>
          <form id="create-post-form" @submit.prevent="createPost">
            <div class="form-group col-md-4">
                <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group col-md-4">
                <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
            </div>
            <div class="form-group col-md-4">
                <input type="text" id="body" v-model="body" name="body" class="form-control" placeholder="Enter content">
            </div>
            <div class="form-group col-md-4">
                <input type="text" id="author" v-model="author" name="author" class="form-control" value="Olususi Oluyemi">
            </div>

            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-success" onSu type="submit"> Create Post </button>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      body: '',
      author: '',
      date_posted: '',
    };
  },
  created() {
    this.date_posted = new Date().toLocaleDateString();
  },
  mounted() {
    console.log('sample');
  },
  methods: {
    createPost() {},
  },
};
</script>

