<script context="module">
  export async function load({ fetch }) {
    const props = await fetch(`/artworks/recent.json`).then((r) => r.json());

    return {
      props,
    };
  }
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { query } from "$lib/api";
  import { Summary } from "$comp";
  import { fade } from "svelte/transition";
  import { Activity, RecentActivityCard, LatestPiecesCard } from "$comp";
  import { err } from "$lib/utils";
  import branding from "$lib/branding";
  import { prefetch, goto } from "$app/navigation";
  import { browser } from "$app/env";
  import Fa from "svelte-fa";
  import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

  onMount(() => browser && prefetch("/market"));

  export let featured;
  export let recent;
  export let latest;

  let current = 0;
  $: artwork = featured && featured[current] && featured[current].artwork;

  let interval = setInterval(() => {
    if (!featured) return;
    current++;
    if (current >= featured.length) current = 0;
  }, 6000);

  onDestroy(() => clearInterval(interval));
</script>

<div
  class="px-4 py-10 h-auto md:h-[100vh] block md:flex mx-auto justify-center items-center"
>
  <div class="w-full md:w-1/2 xl:w-[25%] mx-auto space-y-4">
    <p class="text-blueberry">RENTAL CALCULATOR</p>
    <p class="text-4xl text-black font-semibold">
      The Rental Property Calculator Delivering Insight Into Any Home Rental
      Potential
    </p>
    <p class="text-greyTwo">
      Enter The Address Of Any Single-Family Home In the U.S. And Receive A
      Forecast of Potential Return.
    </p>
    <div class="bg-white flex justify-between rounded-lg p-1 shadow-xl">
      <Fa icon={faMapMarkerAlt} class="text-greyOne self-center mx-2" />
      <input
        type="text"
        name=""
        value=""
        placeholder="Enter Address"
        class="w-full mr-1"
      />

      <button
        type="button"
        name="button"
        class="bg-blueberry rounded-lg p-1 px-2 text-white">ANALYZE</button
      >
    </div>
  </div>
  <div class="w-full md:w-1/2 mt-8 md:mt-0">
    <img src="/hero.svg" alt="" />
  </div>
</div>

<div
  class="px-4 py-10 h-auto xl:h-[100vh] bg-greyOne flex justify-center items-center"
>
  <div>
    <p class="text-4xl text-black font-semibold mb-4 text-center">
      This is what Amortize is all about.
    </p>
    <p class="text-greyTwo text-center">
      Something goes here and it looks awesome.
    </p>
    <div
      class="mt-10 space-y-4 md:space-y-0 md:grid grid-cols-3 gap-4 mx-0 lg:mx-20 xl:mx-32"
    >
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img src="/SVGs/reno.svg" alt="" class="rounded-full shadow-xl p-4" />
        <p class="text-xl font-semibold">Home Renovation</p>
        <p class="text-greyTwo">
          Your dream home doesn't have to wait any longer. Start your project!
        </p>
      </div>
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img src="/SVGs/debt.svg" alt="" class="rounded-full shadow-xl p-4" />
        <p class="text-xl font-semibold">Eliminate Debt</p>
        <p class="text-greyTwo">
          Say no to aggresive interest and overwhelming monthly payments.
        </p>
      </div>
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img
          src="/SVGs/business.svg"
          alt=""
          class="rounded-full shadow-xl p-4"
        />
        <p class="text-xl font-semibold">Start Your Business</p>
        <p class="text-greyTwo">
          Bring your idea to life, no business loans or investors needed.
        </p>
      </div>
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img
          src="/SVGs/purchase.svg"
          alt=""
          class="rounded-full shadow-xl p-4"
        />
        <p class="text-xl font-semibold">Make A Large Purchase</p>
        <p class="text-greyTwo">
          Keep your savings intact and fund important purchases debt-free.
        </p>
      </div>
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img
          src="/SVGs/savings.svg"
          alt=""
          class="rounded-full shadow-xl p-4"
        />
        <p class="text-xl font-semibold">Recover Your Savings</p>
        <p class="text-greyTwo">
          Get back your down payment & protect your financial future with a
          healthy savings account.
        </p>
      </div>
      <div class="p-4 bg-white space-y-4 shadow text-black rounded-2xl">
        <img
          src="/SVGs/questions.svg"
          alt=""
          class="rounded-full shadow-xl p-4"
        />
        <p class="text-xl font-semibold">Questions?</p>
        <p class="text-greyTwo">
          Your unison team is here to guide you at every step of the way.
        </p>
      </div>
    </div>
  </div>
</div>

<div
  class="px-4 mx-0 mt-10 lg:mx-32 py-10 md:space-x-10 block md:flex justify-center items-center"
>
  <div class="w-full md:w-[35%] space-y-4">
    <p class="text-4xl text-black font-semibold">
      The Absolute Must Have Tool For Any Real Estate Investor.
    </p>
    <p class="text-greyTwo">
      View Cash Flow, Cap Rate. Appreciation and Yield - With One Click.
    </p>
    <button
      type="button"
      name="button"
      class="bg-gradient-to-r from-turquoise via-blueberry to-lavender rounded-lg py-2 px-6 text-white"
      on:click={() => goto("/help")}>LEARN MORE</button
    >
  </div>
  <div
    class="mt-4 md:mt-0 md:w-1/2 block md:grid grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 md:space-y-0"
  >
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/cash.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">$2,364</p>
        <p class="text-greyTwo text-sm">Cash Flow</p>
      </div>
    </div>
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/cash.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">7.9%</p>
        <p class="text-greyTwo text-sm">Cap Rate</p>
      </div>
    </div>
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/cap.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">9.5%</p>
        <p class="text-greyTwo text-sm">Cash On Cash</p>
      </div>
    </div>
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/oncash.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">12.1%</p>
        <p class="text-greyTwo text-sm">Gross Yield</p>
      </div>
    </div>
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/yield.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">$29,393</p>
        <p class="text-greyTwo text-sm">Return In 5 Years</p>
      </div>
    </div>
    <div
      class="shadow-xl rounded-xl p-4 space-x-4 flex justify-center items-center"
    >
      <img src="/SVGs/return.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black font-semibold text-2xl">15.4%</p>
        <p class="text-greyTwo text-sm">Ann. Return 5 Years</p>
      </div>
    </div>
  </div>
</div>

<div
  class="py-10 mb-10 px-4 mt-5 md:mt-20 space-y-10 md:space-y-0 block md:flex justify-center items-center"
>
  <div class="w-full md:w-1/2">
    <img src="/houses.png" alt="" class="mx-auto w-96" />
  </div>
  <div class="w-full md:w-1/2 space-y-4">
    <p class="text-black text-4xl font-semibold">
      Comprehensive Data In One Click — And It's Free.
    </p>
    <p class="text-greyTwo">
      Some details about some things go here and more details and things of such
      nature and more.
    </p>

    <div class="flex justify-start items-center space-x-4">
      <img src="/SVGs/search.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black text-xl font-semibold">Search Easily</p>
        <p class="text-greyTwo">
          Simply enter any address in the U.S. to start your seach.
        </p>
      </div>
    </div>
    <div class="flex justify-start items-center space-x-4">
      <img src="/SVGs/data.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black text-xl font-semibold">Get Instant Data</p>
        <p class="text-greyTwo">
          View key metrics that forecast your return on investment.
        </p>
      </div>
    </div>
    <div class="flex justify-start items-center space-x-4">
      <img src="/SVGs/report.svg" alt="" class="rounded-full shadow-xl p-2" />
      <div class="">
        <p class="text-black text-xl font-semibold">Personalize Reports</p>
        <p class="text-greyTwo">
          Adjust assumptions to create customized analysis.
        </p>
      </div>
    </div>
    <button
      type="button"
      name="button"
      class="bg-gradient-to-r from-lavender via-blueberry to-turquoise rounded-lg py-2 px-8 text-white"
      on:click={() => goto("/register")}>SIGN UP</button
    >
  </div>
</div>
<div
  class="md:space-x-4 space-y-4 px-4 xl:px-32 py-20 bg-greyOne block lg:flex justify-center items-center"
>
  <div class="space-y-4 w-full lg:w-1/3">
    <p class="text-black font-semibold text-4xl">Valuable Data For Everyone</p>
    <p class="text-greyTwo">
      Roofstock's Cloudhouse is for anyone who needs to know a home's estimated
      value.
    </p>
    <a href="/help" class="text-blueberry">LEARN MORE ⟶</a>
  </div>
  <div
    class="mt-4 md:mt-0 block md:grid grid-cols-3 gap-4 w-full lg:w-2/3 space-y-4 md:space-y-0"
  >
    <div class="space-y-4 bg-white rounded-xl p-4 shadow">
      <img src="/SVGs/invest.svg" alt="" class="rounded-full shadow-xl p-2" />
      <p class="text-xl text-black font-semibold">Real Estate Investors</p>
      <p class="text-greyTwo">
        Invaluable in analyzing a home's potential as a rental property
        especially if it's never been a rental.
      </p>
    </div>
    <div class="space-y-4 bg-white rounded-xl p-4 shadow">
      <img src="/SVGs/owner.svg" alt="" class="rounded-full shadow-xl p-2" />
      <p class="text-xl text-black font-semibold">Home Owners</p>
      <p class="text-greyTwo">
        Considering making your home an income property? Instantly access the
        potential financials to market it as an investment property.
      </p>
    </div>
    <div class="space-y-4 bg-white rounded-xl p-4 shadow">
      <img src="/SVGs/agents.svg" alt="" class="rounded-full shadow-xl p-2" />
      <p class="text-xl text-black font-semibold">Realtors & Agents</p>
      <p class="text-greyTwo">
        Get accurate home data quickly for client presentations and marketing
        reports.
      </p>
    </div>
  </div>
</div>

<div class="px-4 xl:px-32 py-20 block lg:flex justify-center items-center">
  <div class="w-full lg:w-1/3 space-y-4">
    <p class="text-black font-semibold text-4xl">
      Something here to give more info and look good.
    </p>
    <p class="text-greyTwo">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis
      convallis tellus id. Elit pellentesque habitant morbi tristique. Sed
      viverra tellus in hac habitasse platea dictumst vestibulum.
      <br /><br />
      Sed nisi lacus sed viverra tellus in hac habitasse. Cursus mattis molestie
      a iaculis. In nisl nisi scelerisque eu ultrices vitae. Arcu risus quis varius
      quam quisque id diam vel. Suspendisse potenti nullam ac tortor vitae purus.
      Convallis aenean et tortor at risus viverra adipiscing at.
    </p>
    <button
      type="button"
      name="button"
      class="bg-gradient-to-r from-turquoise via-blueberry to-lavender rounded-lg py-2 px-6 text-white"
      on:click={() => goto("/help")}>LEARN MORE</button
    >
  </div>
  <div
    class="mt-10 md:mt-0 w-full lg:w-1/2 flex justify-center md:justify-end items-center relative"
  >
    <img src="/SVGs/Pattern.svg" alt="" />
    <img src="/estate1.jpg" alt="" class="absolute md:right-20 md:w-96" />
  </div>
</div>

<div class="px-4 py-20 bg-greyOne flex justify-center items-center">
  <div class="space-y-10">
    <p class="text-4xl font-semibold text-black">Amortize Markets</p>
    <ul
      class="text-greyTwo w-full grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 md:gap-20"
    >
      <div class="space-y-1 md:space-y-4">
        <li>Alabama</li>
        <li>Arizona</li>

        <li>Arkansas</li>
        <li>California</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>Delaware</li>
        <li>Florida</li>
        <li>Georgia</li>
        <li>Illinois</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>Indiana</li>
        <li>Kansas</li>
        <li>Kentucky</li>
        <li>Michigan</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>Minnesota</li>
        <li>Mississippi</li>
        <li>Missouri</li>
        <li>Nevada</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>New Jersey</li>
        <li>New York</li>
        <li>North Carolina</li>
        <li>Ohio</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>Oklahoma</li>
        <li>Pennsylvania</li>
        <li>South Carolina</li>
        <li>Tennessee</li>
      </div>
      <div class="space-y-1 md:space-y-4">
        <li>Texas</li>
        <li>Virginia</li>
        <li>Wisconsin</li>
        <li>Wyoming</li>
      </div>
    </ul>
  </div>
</div>

<div
  class="text-white px-4 py-20 flex justify-center items-center bg-gradient-to-r from-turquoise via-blueberry to-lavender"
>
  <div class="space-y-10">
    <div>
      <p class="font-semibold text-4xl text-center">
        Find Out How<br /> Much Cash You Can Unlock
      </p>
      <p class="text-center">Enter Your Address To Get Your Instant Estimate</p>
    </div>
    <div class="bg-white flex justify-between rounded-lg p-1 shadow-xl">
      <Fa icon={faMapMarkerAlt} class="text-greyOne self-center mx-2" />
      <input
        type="text"
        name=""
        value=""
        placeholder="Enter Address"
        class="text-black w-full mr-1"
      />
      <button
        type="button"
        name="button"
        class="bg-blueberry rounded-lg p-1 px-2 text-white">ANALYZE</button
      >
    </div>
    <div
      class="text-center block md:flex justify-between items-center md:space-x-10"
    >
      <p>✔️ Free Estimate</p>
      <p>✔️ Apply In 5 Minutes</p>
      <p>✔️ Zero Impact On Credit</p>
    </div>
  </div>
</div>

<style>
</style>
