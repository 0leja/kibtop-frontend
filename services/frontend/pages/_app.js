
import '../styles/app.css'
import '../styles/header.css'
import '../styles/slider.css'
import '../styles/home.css'
import '../styles/registration.css'
import '../styles/login.css'
import '../styles/recovery.css'
import '../styles/profile.css'
import '../styles/settings.css'
import '../styles/edit_profile.css'
import '../styles/archive.css'
import '../styles/favorites.css'
import '../styles/detail.css'
import '../styles/add_advert.css'
import '../styles/category.css'





import React, { Suspense } from 'react';
import { store } from '../store/store';
import {Provider} from 'react-redux'
import { CurrencyProvider } from '../locales/CurrencyContext';
import Head from 'next/head';
import { LocationProvider } from '../locales/LocationContext'
import {SessionProvider} from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ArchiveApi } from '../services/ArchiveApi'
import { CoogleMapProvider } from '../locales/MapContext'

const queryClient = new QueryClient()

queryClient.setMutationDefaults(['delArchive'], {
  mutationFn: (category, id) => ArchiveApi.deleteUserArchiveAdvert(category, id),
  onMutate: async () => {
    await queryClient.cancelQueries({ queryKey: ['archive'] })
  }
})

function MyApp({ Component, pageProps, session }) {
  

  return (
    <>
      <SessionProvider {...{session}}>
        <Provider store={store}>
          <CoogleMapProvider>
            <QueryClientProvider client={queryClient}>
              <LocationProvider>
                <CurrencyProvider>
                  <Component {...pageProps} />
                </CurrencyProvider>
              </LocationProvider>
            </QueryClientProvider>
          </CoogleMapProvider>
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp
