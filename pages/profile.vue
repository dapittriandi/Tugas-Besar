<template>
    <section class="section">
      <div class="container">
        <h2 class="title">My Profile</h2>
  
        <div class="content">
          <p>
            <strong>Username:</strong>
            {{ loggedInUser.username }}
          </p>
          <p>
            <strong>Email:</strong>
            {{ loggedInUser.email }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    layout(context) {
        return 'custom'
    },
    middleware: 'auth',
  
    computed: {
      ...mapGetters(['loggedInUser']),
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
                }],
              }
              }
  };
  </script>