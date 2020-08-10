<template>
  <Layout>
    <div class="text">
      <section class="u-max-page-width">
        <h1 class="heading heading--xxl heading--xxl-paragraph">
          Über mich
        </h1>
        <div class="profile">
          <div class="profile__text">
            <p class="u-font-m u-font-m--paragraph">
              Hi, mein Name ist Pascal Chorus. Ich bin 35 Jahre alt und seit rund 15 Jahren bin ich als
              Software-Entwickler tätig. Ich lebe in Herzogenrath in der StädteRegion Aachen und arbeite in Köln.
            </p>
            <p class="u-font-m u-font-m--paragraph">
              Mein Einstieg in die Entwicklung begann 2005 bei der Inform GmbH. Dort habe ich jahrelang
              objektorientierten Code in C++ zur Implementierung von Unternehmenssoftware für Windows geschrieben.
            </p>
            <p class="u-font-m u-font-m--paragraph">
              Seit mehr als zehn Jahren liegt mein Fokus auf der Web-Entwicklung. So habe ich zunächst als
              Fullstack-Entwickler an verschiedenen Projekten gearbeitet, in denen das Backend in Java und C++ mit
              Anbindung an Microsoft SQL Server-Datenbanken und das Frontend mit jQuery oder AngularJS entwickelt
              wurden.
            </p>
            <p class="u-font-m u-font-m--paragraph">
              Seit 2017 ist der Schwerpunkt meiner Arbeit die Frontend-Entwicklung mit Angular. Darüber hinaus
              implementiere ich kleinere Anpassungen im Backend mit Python und PostgreSQL.
            </p>
            <p class="u-font-m u-font-m--paragraph">
              In meiner Freizeit erstelle ich zudem Webseiten mit Vue.js und Gridsome.
            </p>
            <p class="u-font-m">
              Ich besuche regelmäßig Konferenzen, wie z.B. die AngularConnect in London oder die Angular Days und
              JavaScript Days in Berlin oder München. Zusätzlich halte ich mich durch Online-Ressourcen wie Blog-Posts
              und Konferenz-Vorträgen stets auf dem Laufenden.
            </p>
          </div>
          <img class="profile__avatar" alt="Portrait von Pascal Chorus" src="@/assets/portrait.jpg" />
        </div>
      </section>
    </div>

    <div class="skills">
      <div class="u-flex u-max-page-width">
        <section>
          <h2 class="heading heading--l heading--l-paragraph">Kennnisse</h2>

          <dl class="description-list">
            <div>
              <dt class="description-list__term">Frontend</dt>
              <dd class="description-list__description">HMTL, CSS, SASS, JavaScript, TypeScript, RxJS</dd>
              <dd class="description-list__description">AngularJS, Angular, Vue, Gridsome, Node.js, NPM</dd>
              <dd class="description-list__description">Angular CLI, ESLint, TSLint, Karma, Cypress</dd>
            </div>
            <div>
              <dt class="description-list__term">Backend</dt>
              <dd class="description-list__description">
                Java, Node.js, Apollo GraphQL, PostgreSQL, Microsoft SQL Server
              </dd>
            </div>
            <div>
              <dt class="description-list__term">Hosting</dt>
              <dd class="description-list__description">
                Amazon Web Services (AWS), Heroku, Netlify, Google Firebase
              </dd>
            </div>
            <div>
              <dt class="description-list__term">Tools</dt>
              <dd class="description-list__description">
                Microsoft Visual Studio Code, WebStorm, Git, GitHub, Bitbucket, Jira, Confluence, Bitbucket Pipelines,
                GitHub Actions
              </dd>
            </div>
            <div>
              <dt class="description-list__term">Methodik</dt>
              <dd class="description-list__description">
                Agile Softwareentwicklung mit Scrum
              </dd>
            </div>
            <div>
              <dt class="description-list__term">Sprachen</dt>
              <dd class="description-list__description">
                deutsch Muttersprache
              </dd>
              <dd class="description-list__description">
                englisch sehr gute Kenntnisse
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 class="heading heading--l heading--l-paragraph">Berufliche Entwicklung</h2>

          <dl class="description-list">
            <div>
              <dt class="description-list__term">seit April 2017</dt>
              <dd class="description-list__description">Senior Frontend Developer bei der moneymeets GmbH in Köln</dd>
            </div>
            <div>
              <dt class="description-list__term">Oktober 2009 - März 2017</dt>
              <dd class="description-list__description">Full-Stack Sofwareentwickler bei der INFORM GmbH in Aachen</dd>
            </div>
            <div>
              <dt class="description-list__term">Juli 2009</dt>
              <dd class="description-list__description">
                Master of Science Abschluss des Studiums Artificial Intelligence an der Universität Maastricht
              </dd>
            </div>
            <div>
              <dt class="description-list__term">August 2008</dt>
              <dd class="description-list__description">
                Bachelor of Science Abschluss des ausbildungsbegleitenden Studiums Scientific Programming an der
                Fachhochschule Aachen
              </dd>
              <dd class="description-list__description">
                Abschluss der Ausbildung zum Mathematisch-technischen Assistenten / Informatik (IHK) bei der INFORM GmbH
                in Aachen
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Über mich',
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.profile {
  display: flex;
  align-items: flex-start;

  &__text {
    flex: 1 1 10px;
    margin-right: $space-xxl;
  }

  &__avatar {
    width: 280px;
    border-radius: $border-radius-image;
  }
}

.text {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.skills {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
  background-color: $background-color-gray;
}

@media (max-width: $max-width-mobile-landscape) {
  .profile {
    flex-direction: column;
    align-items: center;

    &__text {
      margin-right: 0;
      margin-bottom: $space-l;
    }
  }
}
</style>
