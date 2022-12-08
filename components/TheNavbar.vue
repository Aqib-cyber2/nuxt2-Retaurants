<template>
    <header class="mb-5">
        <nav class="mx-auto py-4 flex flex-wrap item-center">
     
            <div class="brand">
                <img class="w-36" src="https://fabrx.co/preview/tastebite/assets/images/brands/brand4.svg" alt="logo">
            </div>

            <ul class="
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between 
                md:pt-0
                ml-auto"
            >
                <li>
                    <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/about">About</router-link>
                </li>
            </ul> 
        </nav>
    </header>
</template>