<script>
  import branding from "$lib/branding";
  import Fa from "svelte-fa";
  import {
    faFacebook,
    faInstagramSquare,
    faTelegramPlane,
    faDiscord,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import { faRss } from "@fortawesome/free-solid-svg-icons";

  let date = new Date();
  let year = date.getFullYear();
</script>

<div class="bg-greyOne px-2">
  <div
    class="w-full container footer mx-auto block xl:flex justify-between text-black py-10"
  >
    <div
      class="block text-center md:text-left md:flex justify-center items-center text-sm w-full mb-2 xl:mb-0"
    >
      <a href="/"><img src="/Logo_Header.svg" alt="logo" class="mx-auto" /></a>
      <p class="ml-5 text-greyTwo">&copy; Copyright {year}</p>
    </div>
    <div class="w-full">
      <ul
        class="text-center list-none block md:flex justify-center items-center"
      >
        <li><a href="/help">Help | </a></li>
        <li>
          <a href="https://blockstream.com/liquid/" class="ml-1"
            >The Liquid Network |
          </a>
        </li>
        <li><a href="/privacy-policy" class="ml-1">Privacy Policy | </a></li>
        <li>
          <a href="/terms-and-conditions" class="ml-1">Terms of Service | </a>
        </li>
        <div class="flex justify-center items-center mt-4 md:mt-0">
          <li>
            <a target="_blank" href={branding.urls.external.twitter}
              ><div class="ml-1 w-6"><Fa icon={faTwitter} /></div>
            </a>
          </li>

          <li>
            <a target="_blank" href={branding.urls.external.instagram}
              ><div class="w-6"><Fa icon={faInstagramSquare} /></div>
            </a>
          </li>
          <li>
            <a target="_blank" href={branding.urls.external.facebook}
              ><div class="w-6"><Fa icon={faFacebook} /></div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</div>
