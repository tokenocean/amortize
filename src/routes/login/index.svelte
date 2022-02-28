<script context="module">
  export async function load({ session }) {
    if (session && session.user) {
      return {
        status: 301,
        redirect: "/",
      };
    }

    return {};
  }
</script>

<script>
  import Fa from "svelte-fa";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  import { page, session } from "$app/stores";
  import { user, token } from "$lib/store";
  import { dev, err, goto } from "$lib/utils";
  import { post } from "$lib/api";
  import cryptojs from "crypto-js";
  import { tick } from "svelte";
  import { keypair, singlesig, multisig } from "$lib/wallet";
  import { onMount } from "svelte";

  let show;
  let email = "";
  let password = dev ? "liquidart" : "";

  let emailInput;
  let pageChange = () =>
    setTimeout(() => emailInput && emailInput.select(), 50);
  $: if (emailInput) pageChange($page);

  let login = async () => {
    try {
      let res = await post("/auth/login", { email, password }, fetch).json();

      $user = res.user;
      $session = { user: res.user, jwt: res.jwt_token };
      $token = $session.jwt;
      window.sessionStorage.setItem("password", password);

      goto("/");
    } catch (e) {
      err(e);
    }
  };
</script>

<div class="min-h-screen form-container bg-blueberry px-4">
  <form
    class="mb-6 text-white"
    on:submit|preventDefault={login}
    autocomplete="off"
  >
    <h2 class="mb-8 text-white">Sign In</h2>
    <div class="flex flex-col mb-4">
      <label class="mb-2 font-medium" for="first_name">Email or username</label>
      <input bind:value={email} bind:this={emailInput} autocapitalize="off" />
    </div>
    <div class="flex flex-col mb-4">
      <label class="mb-2 font-medium" for="last_name">Password</label>
      <div class="relative">
        {#if show}
          <input class="w-full" bind:value={password} autocapitalize="off" />
        {:else}
          <input
            class="w-full"
            type="password"
            bind:value={password}
            autocapitalize="off"
          />
        {/if}
        <button
          class="absolute h-full px-3 right-0 top-0 w-auto"
          type="button"
          on:click|preventDefault|stopPropagation={() => (show = !show)}
        >
          <Fa
            icon={show ? faEyeSlash : faEye}
            class="text-black my-auto mr-1"
          />
        </button>
      </div>
    </div>
    <a href="/forgot-password" class="block w-full text-turquoise"
      >Forgot password?</a
    >
    <div class="flex my-5 justify-end">
      <button
        class="rounded-full bg-white p-2  font-semibold text-black w-full"
        type="submit">Sign In</button
      >
    </div>
    <a href="/register" class="text-turquoise">Don't have an account? Sign up</a
    >
  </form>
</div>
