"use strict";(()=>{var p=JSON.parse('{"github":{"repository":"techsumorg/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"********-****-****-****-************","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"w_Z1jCEfJNnnhB-T_c6sm"}}');var c="IS_LAZIED",g=String(!0),u=["keydown","mouseover","touchmove","touchstart","scroll","click"],d=new Promise(t=>{function r(){try{return localStorage.getItem(c)===g}catch(n){return!0}}function o(n=!0){try{n?localStorage.setItem(c,g):localStorage.removeItem(c)}catch(s){}}function e(n){o(!0),t({type:n.type.toLowerCase()});for(let s of u)window.removeEventListener(s,e)}if(r())t({type:"local"});else{(document.documentElement.scrollTop!==0||document.body&&document.body.scrollTop!==0)&&e({type:"scroll"});for(let n of u)window.addEventListener(n,e)}});var i=p.pwa,f=(t,r)=>{if(i.logs){console.groupCollapsed.apply(console,Array.isArray(t)?t:[t]);for(let o of r)console.log.apply(console,Array.isArray(o)?o:[o]);console.groupEnd()}};if("serviceWorker"in navigator){navigator.serviceWorker.register(i.serviceWorker.source,{scope:i.serviceWorker.scope}).then(r=>{var e;let o=[];r.scope,(e=r.active)!=null&&e.scriptURL}).catch(r=>{});let t=r=>o=>{o.init(r).then(()=>{let e=[["Version:",o.VERSION]],n=o.config,s=o.User.PushSubscription,m=o.Notifications,l=window.location.origin;if(n){e.push(["App ID:",n.appId]),e.push(["Origin:",n.origin]),e.push(["Site Name:",n.siteName]);let a=n.userConfig;a&&(a.serviceWorkerParam&&e.push(["Scope:",l+a.serviceWorkerParam.scope]),e.push(["Script:",l+a.path+a.serviceWorkerPath]))}s.id&&e.push(["Subscription ID:",s.id]),e.push(["Notification:",m.permissionNative]),f(["%cOneSignal: Initialized Successfully","color: green"],e)}).catch(e=>{f(["%cOneSignal: Initialization Failed","color: red"],["Error:",e])})};if(i.oneSignalEnabled){let r=Object.assign({},i.oneSignalConfig);window.OneSignalDeferred=window.OneSignalDeferred||[],window.OneSignalDeferred.push(t(r)),typeof OneSignal=="undefined"&&d.then(()=>{let o=document.createElement("script");o.src=i.oneSignalSDK,o.async=!0,o.defer=!0;let e=document.getElementsByTagName("script")[0];e!=null&&e.parentNode?e.parentNode.insertBefore(o,e):document.head.appendChild(o)})}}})();
