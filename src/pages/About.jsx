// Page "À propos"

function About() {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">À propos</h1>

      <p>
        Ce site regroupe mes aides-mémoire de développeur web junior : HTML5,
        CSS3, JavaScript, React, Git, etc. Utile pour réviser, pratiquer et
        progresser.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Qui suis-je ?</h2>
      <p>
        Je m’appelle <strong>Florian Vidal</strong>, j’ai 38 ans et je vis à
        Bordeaux, en Gironde. Aujourd’hui en reconversion professionnelle vers
        le développement web, je suis animé par l’envie d’apprendre, de
        progresser et de construire des projets web utiles et créatifs.
      </p>
      <p>
        👉{" "}
        <a
          href="https://www.linkedin.com/in/vidal-florian/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Mon profil LinkedIn
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Mon parcours</h2>
      <p>
        Avant de devenir développeur web, j’ai exploré plusieurs univers :
        cuisinier, génie civiliste en centrales nucléaires, vendeur multimédia,
        et plus récemment, gérant d’une société spécialisée dans le bien-être,
        le CBD et la vape pendant 4 ans. Ces expériences m’ont appris la
        rigueur, le sens du service et la gestion de projets.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Pourquoi le développement web ?</h2>
      <p>
        Mon déclic s’est fait grâce à une idée de projet personnel : créer un
        site qui référence les objets de collection Dragon Ball sortis en France
        dans les années 90-2000. En découvrant la programmation via des
        créateurs comme Grafikart, j’ai compris que concevoir un site, penser
        son architecture, résoudre des problèmes logiques et travailler son
        design étaient des aspects qui me passionnaient.
      </p>
      <p>
        J’ai commencé par tester le no-code (Wix), puis WordPress en tant que
        freelance. Mais très vite, j’ai eu envie d’aller plus loin et d’acquérir
        de vraies compétences techniques.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Ma formation</h2>
      <p>
        En 2019, j’ai suivi un premier bootcamp autour de PHP et Symfony.
        Aujourd’hui, j’ai choisi de me former sérieusement au métier de
        développeur web avec <a
          href="https://www.lereacteur.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Le Reacteur
        </a>
        , un bootcamp intensif full-stack JavaScript.
      </p>
      <ul className="list-disc pl-6">
        <li>Un programme en phase avec les besoins réels des entreprises</li>
        <li>Une approche humaine et exigeante</li>
        <li>Un format temps plein, idéal pour progresser vite</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Ce que j’ai appris</h2>
      <p>
        Chaque journée de formation est un challenge stimulant. Le module React
        m’a paru le plus exigeant (complexe mais très puissant). Le backend a
        été un vrai coup de cœur, notamment la gestion des données entre client,
        serveur et base de données. J’ai particulièrement aimé développer la
        réplique de Vinted, de MARVEL ou encore de Deliveroo, riche en fonctionnalités de style marketplace.
      </p>
      <p>
        L’une de mes surprises les plus marquantes : la puissance des
        algorithmes, qui rappellent à quel point la logique informatique peut
        s’inspirer de mécanismes du vivant.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Mon ressenti</h2>
      <p>
        La formation à distance demande organisation et rigueur, mais je m’y
        retrouve bien. J’ai appris à prioriser mes tâches, prendre des notes
        structurées et avancer pas à pas sans me décourager.
      </p>
      <p>
        💡 Mon conseil : trouver un équilibre entre apprentissage, repos et
        hygiène de vie pour tenir le rythme d’un bootcamp.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Mes projets</h2>
      <p>
        En parallèle de ma formation, j’ai donc décidé de créer une appli web “trousse à outils”
        pour développeurs débutants. L’appli est loin d’être exhaustive et il y a encore quelques 
        erreurs et améliorations à venir mais c’est un début et elle me permet de retrouver 
        l’essentiel à portée de clic 👉{" "}
        <a
          href="https://toolkitwebdev.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Toolkit Web Dev
        </a>
      </p>
      <p>
        Une grosse partie de l’appli a été codée par l’IA mais le contenu et l’agencement est de moi. 
        Le but étant de proposer du contenu pratique en ligne rapidement et en parallèle de ma formation. 
        Lorsque j’aurai le temps, je re-coderai l’appli avec mes compétences propres acquises chez Le Reacteur à la fin du bootcamp.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Et demain ?</h2>
      <p>
        À la fin de ma formation, je souhaite :
      </p>
      <ul className="list-disc pl-6">
        <li>Consolider mes acquis et enrichir mon portfolio</li>
        <li>
          Rejoindre une entreprise en alternance pour progresser et contribuer à
          des projets concrets
        </li>
      </ul>
    </div>
  );
}

export default About;
