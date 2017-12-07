<template>
  <div class="create-post">
    <h1>Create your post</h1>
    <form action="/post">
      <label for="cover">Cover</label>
      <input type="file" name="cover">
      <label for="title">Title</label>
      <input type="text" name="title" placeholder="Top 10 anime betrayal">
      <label for="category">Category</label>
      <select name="category">
        <option>Gaming News</option>
        <option>Science/Tech</option>
        <option>Web News</option>
      </select>
      <label for="content">Content</label>
      <textarea name="content" placeholder="Write your story here..."></textarea>

      <input type="submit" name="submit_post" value="Create">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost'
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.create-post {
  height: 100vh;
  padding-top: 50px;
  background-color: #3434A3;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
form {
  width: 50%;
  margin: 5% auto auto auto;
  padding: 30px;
  border-top: 2px solid #262727;
  border-bottom: 2px solid #262727;
}
select {
  width: 50%;
  height: 27px;
  margin: auto;
  border: none;
}
textarea {
  width: 50%;
  min-height: 100px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  resize: none;
  margin: auto;
  border: none;
}
label {
  margin-top: 10px;
  margin-left: 25%;
  margin-bottom: 5px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-align: left;
}
input {
  width: 50%;
  height: 27px;
  margin: auto;
  border: none;
}
input[type='submit'] {
  height: 40px;
  margin-top: 35px;
  font-size: 18px;
  word-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background-color: #262727;
  cursor: pointer;
  transition: .3s ease;
}
input[type='submit']:hover {
  color: #262727;
  background-color: #2828AB;
}
label, input {
  display: block;
}
</style>
