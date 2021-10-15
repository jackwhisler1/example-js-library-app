<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="test">
      <overlay-scrollbars :options="{ scrollbars: { autoHide: 'scroll' } }" :extensions="['extensionA', 'extensionB']">
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <overlay-scrollbars style="max-height: 10px">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis autem, nisi consequatur sed
            eligendi, eaque tempore a quasi voluptatem recusandae beatae dolorum ipsum corrupti? Fuga vitae magni iste
            inventore perspiciatis magnam commodi accusamus provident dignissimos, sit possimus architecto fugiat.
            Delectus, inventore tenetur sapiente qui nesciunt necessitatibus, atque possimus fuga ratione dolorem sunt
            eaque explicabo dolores quisquam magni laboriosam repudiandae, corporis ipsa ipsum veniam beatae hic
            consectetur accusamus.
            <span class="elapsed"></span>
            Quasi omnis exercitationem quam tenetur quidem, distinctio laudantium! Doloremque alias excepturi laudantium
            modi est placeat a porro dicta recusandae labore! Molestiae tempore perspiciatis dignissimos repellendus eum
            sunt facilis perferendis fuga provident doloribus ipsam nam quidem quibusdam minus maxime, dolorum sed dicta
            neque obcaecati minima, cupiditate iusto blanditiis facere! Mollitia incidunt voluptas, unde iusto eligendi
            debitis? Expedita tempore numquam dolore minus, inventore reiciendis molestias quisquam accusantium
            doloribus. Animi ducimus tenetur nulla maxime provident esse ex eius dolore dolor assumenda nisi
            voluptatibus asperiores explicabo perferendis officiis saepe, eos laboriosam minus, iure est quidem
            voluptatum. Beatae sunt molestiae obcaecati excepturi facere consequatur explicabo recusandae, ratione velit
            autem porro ducimus blanditiis aperiam officiis quidem placeat libero error mollitia amet quisquam soluta
            eaque, exercitationem nemo a! Excepturi, magnam inventore. Ut, libero. In dicta officiis provident accusamus
            inventore quasi nostrum mollitia exercitationem nisi fuga reprehenderit, quibusdam tenetur nesciunt
            similique alias! Odit harum totam quis accusantium exercitationem vel, facere illum eaque unde debitis
            placeat amet, sed consequuntur cupiditate distinctio quam veniam ratione, dolor perspiciatis repellat!
            Blanditiis fugit corporis excepturi, ducimus recusandae eum eaque repellat doloremque, voluptatum quo
            tempora atque suscipit neque dolor saepe id rem, dignissimos obcaecati. Officia esse pariatur magnam
            aperiam. Voluptatibus illum quos, mollitia, recusandae dolores esse enim harum natus soluta repellendus
            dolor accusantium ratione possimus, est excepturi voluptates? Iusto error, placeat similique aspernatur,
            quod facere rem et pariatur blanditiis fuga voluptatibus nulla labore nihil omnis molestiae laboriosam vel
            quis corporis. Quisquam, repellat qui tenetur quos ab voluptatibus doloribus itaque aut nisi quibusdam
            voluptatem dignissimos labore eaque explicabo repellendus deleniti? Aliquid corrupti maxime id a! Molestiae
            nisi perspiciatis velit hic sit, est doloremque labore quibusdam cumque adipisci? Sapiente corrupti, commodi
            doloribus enim dolor nobis! Inventore nulla nostrum ullam alias quam corporis rerum obcaecati ea a quibusdam
            rem impedit modi debitis laudantium accusamus voluptatum harum natus tenetur excepturi sapiente culpa
            consequatur porro, at magni. Eum, magnam? Excepturi assumenda deserunt officia dolore ad eaque minima fuga
            velit veniam. Quo nulla et perferendis minima ex mollitia. Adipisci nostrum, minus consectetur dolor
            temporibus ipsum cupiditate, beatae sed labore facere molestias distinctio quae ea, ipsa consequatur!
            Officiis asperiores voluptates nihil eveniet quam repellendus obcaecati, facilis quasi ipsam veniam iste
            ullam doloremque enim maxime nisi dolores consectetur ratione. Dolorem eligendi molestiae quod temporibus
            quos animi voluptas iste quidem ipsam. Cumque ab aperiam magnam, iusto id quaerat aspernatur optio nisi
            omnis itaque minima consequatur, laudantium ex autem fugiat eaque amet expedita nam voluptate sequi.
            Temporibus quis debitis delectus at, fugiat neque deserunt inventore pariatur, beatae, obcaecati
            necessitatibus rem nulla autem accusantium doloremque aut porro soluta atque natus placeat eveniet et
            dolorum quam expedita. Voluptatibus!
          </p>
        </overlay-scrollbars>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
        <h1>Lets Get some Scrolling Action</h1>
      </overlay-scrollbars>
    </div>

    <canvas width="100" height="100"></canvas>
  </div>
</template>

<style scoped>
#test {
  border: 2px solid;
  width: 480px;
  margin: 10px auto 20px auto;
  border-radius: 10px;
  padding: 10px;
  line-height: 16pt;
}

p {
  margin: 1rem auto;
}
h1,
h2 {
  max-width: 40rem;
  text-align: center;
}
p {
  max-width: 18.75rem;
  margin: 1rem auto;
}
</style>

<script>
import Legra from "legra";

export default {
  data: function () {
    return {
      legos: "",
    };
  },
  mounted: function () {
    this.lego();
    this.shave("elapsed", 10);
  },
  methods: {
    lego: function () {
      const ctx = document.querySelector("canvas").getContext("2d");

      const legra = new Legra(ctx);
      legra.line(3, 1, 10, 1);
    },
  },
};
</script>
