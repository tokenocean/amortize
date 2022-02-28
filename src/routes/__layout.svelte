<script context="module">
  import { prerendering } from "$app/env";
  import { get } from "$lib/api";
  import "../main.css";

  export async function load({ fetch, url, session }) {
    if (prerendering)
      return {
        props: {
          addresses: [],
          titles: [],
        },
      };

    const props = await get(`/addresses.json`, fetch);

    if (
      session &&
      session.user &&
      !session.user.wallet_initialized &&
      !["/wallet", "/logout"].find((p) => url.pathname.includes(p))
    )
      return {
        status: 302,
        redirect: "/wallet/setup",
      };

    return {
      props,
    };
  }
</script>

<script>
  import { browser } from "$app/env";
  import { page, session } from "$app/stores";
  import decode from "jwt-decode";
  import { Sidebar, Navbar, Dialog, Footer, Snack, Head } from "$comp";
  import {
    addresses as a,
    meta,
    titles as t,
    password,
    prompt,
    poll,
    user,
    token,
  } from "$lib/store";
  import { onDestroy, onMount } from "svelte";
  import branding from "$lib/branding";

  export let addresses, titles;

  let interval;
  let refresh = async () => {
    try {
      let { jwt_token } = await get("/auth/refresh.json", fetch);
      if (browser) $token = jwt_token;
    } catch (e) {
      console.log(e);
    }
  };

  if (browser) {
    history.pushState = new Proxy(history.pushState, {
      apply(target, thisArg, argumentsList) {
        Reflect.apply(target, thisArg, argumentsList);
        scrollTo(0, 0);
      },
    });

    $a = addresses;
    $t = titles;
    $user = $session.user;
    $token = $session.jwt;

    interval = setInterval(refresh, 60000);
  }

  let open = false;
  let y;

  let stopPolling = () => {
    $poll.map(clearInterval);
    $prompt = false;
  };
  $: stopPolling($page);

  onDestroy(() => clearInterval(interval));
  onMount(() => {
    if (browser && !$password)
      $password = window.sessionStorage.getItem("password");
  });
</script>

<svelte:window bind:scrollY={y} />

{#if !($page.url.pathname.includes("/a/") && $page.url.pathname.split("/").length === 3)}
  <Head metadata={branding.meta} />
{/if}

<Snack />
<div class="bg-white">
  <Sidebar bind:open />
  <div class={y > 50 ? "sticky bg-white" : "bg-white"}>
    <Navbar bind:sidebar={open} />
  </div>
  <Dialog />

  <main>
    <div class="mx-auto min-h-screen">
      <slot />
    </div>
  </main>

  <Footer />
</div>

<style global>
  input,
  textarea,
  select {
    @apply border bg-white text-black focus:outline-none;
    overflow-y: auto;
    padding: 0;
    padding: 10px;
  }

  .title {
    @apply font-bold pb-14 text-4xl text-left;
    color: #133e7c;
  }

  input {
    @apply appearance-none border rounded leading-tight;
  }

  .form-container {
    width: 100%;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container form {
    width: 100%;
    max-width: 450px;
    @apply bg-brand;
    padding: 40px;
    box-shadow: 0 1px 5px rgb(0 0 0 / 18%);
    border-radius: 10px;
  }

  @media only screen and (max-width: 640px) {
    .form-container {
      height: auto;
    }

    .form-container form {
      box-shadow: none;
      padding: 1rem;
    }
  }
</style>
