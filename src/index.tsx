import { h, render } from 'preact';
import { StoreProvider } from '@preact-hooks/unistore';
import { store } from './store';
import { App } from './app/app';
import './globalStyles';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { LocalisationProvider } from './modules/localisation/localisation.context';

if (process.env.NODE_ENV !== 'development' && !(window as any).prerendering) {
    OfflinePluginRuntime.install();
}

if ((module as any).hot) {
    (module.hot as any).accept();
    require('preact/debug');
}

render(
    <StoreProvider value={store}>
        <LocalisationProvider>
            <App />
        </LocalisationProvider>
    </StoreProvider>,
    (document as any).getElementById('root')
);
