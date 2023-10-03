<template>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h2 class="title has-text-centered">Register!</h2>
  
            <Notification v-if="error" :message="error"/>
  
            <form method="post" @submit.prevent="register">
  
              <div class="field">
                <label class="label">Username</label>
  
                <div class="control">
                  <input
                    v-model="username"
                    type="text"
                    class="input"
                    name="username"
                    required
                  >
                </div>
              </div>
  
              <div class="field">
                <label class="label">Email</label>
  
                <div class="control">
                  <input
                    v-model="email"
                    type="email"
                    class="input"
                    name="email"
                    required
                  >
                </div>
              </div>
  
              <div class="field">
                <label class="label">Password</label>
  
                <div class="control">
                  <input
                    v-model="password"
                    type="password"
                    class="input"
                    name="password"
                    required
                  >
                </div>
              </div>
  
              <div class="control">
                <button type="submit" class="button is-dark is-fullwidth">Register</button>
              </div>
            </form>
  
            <div class="has-text-centered" style="margin-top: 20px">
              Already got an account? <nuxt-link to="/login">Login</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Notification from '~/components/Notification';
  
  export default {
    components: {
      Notification,
    },
    layout(context) {
        return 'custom'
    },
    middleware: 'guest',
    
    data() {
      return {
        username: '',
        email: '',
        password: '',
        error: null,
      };
    },
  
    methods: {
      async register() {
        try {
          await this.$axios.post('register', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
  
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          });
  
          this.$router.push('/');
        } catch (e) {
          this.error = e.response.data.message;
        }
      },
    },
    head() {
            return {
                link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://getbootstrap.com/docs/5.3/assets/css/docs.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
                },
              ]
            }
          }
  };
  </script>