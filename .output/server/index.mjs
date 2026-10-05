globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1895-3zN8ehwBaZTV3C+NM6J3lFq/Vxs\"",
		"mtime": "2026-08-21T06:27:46.863Z",
		"size": 6293,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-08-21T06:27:46.864Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/7-DngXVvCb.jpeg": {
		"type": "image/jpeg",
		"etag": "\"29977-eLx5CNhDZzmX6lwUjhZdxER9ywA\"",
		"mtime": "2026-08-25T07:02:43.068Z",
		"size": 170359,
		"path": "../public/assets/7-DngXVvCb.jpeg"
	},
	"/assets/8-D9P4Gf--.jpeg": {
		"type": "image/jpeg",
		"etag": "\"10fe7-RW5aGMIXwk2ZMh3PFldv86nRfMk\"",
		"mtime": "2026-08-25T07:02:43.070Z",
		"size": 69607,
		"path": "../public/assets/8-D9P4Gf--.jpeg"
	},
	"/assets/3-Burzacbq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1fd72-V0oUV5tBPtpk5zg9zTJX1Tw2h7E\"",
		"mtime": "2026-08-25T07:02:43.066Z",
		"size": 130418,
		"path": "../public/assets/3-Burzacbq.jpeg"
	},
	"/assets/abb-CJxPaX9-.png": {
		"type": "image/png",
		"etag": "\"195e-EgR9emdFjBT9yCvCJJjabZ+gCFQ\"",
		"mtime": "2026-08-25T07:02:43.117Z",
		"size": 6494,
		"path": "../public/assets/abb-CJxPaX9-.png"
	},
	"/assets/about-AAGkFxrE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8123-0m0fTVhsiKuXyQ7r+8sScN+84oI\"",
		"mtime": "2026-08-25T07:02:43.046Z",
		"size": 33059,
		"path": "../public/assets/about-AAGkFxrE.js"
	},
	"/assets/1--zqKjdUw.jpeg": {
		"type": "image/jpeg",
		"etag": "\"21470-Ykq2NkQ8ZiQW4m3aKrqoel1Mrg0\"",
		"mtime": "2026-08-25T07:02:43.064Z",
		"size": 136304,
		"path": "../public/assets/1--zqKjdUw.jpeg"
	},
	"/assets/acpatil-CHSn5C-I.jpeg": {
		"type": "image/jpeg",
		"etag": "\"19da-qXlw62JCOYp/7nF1dd5Xhu1Pwhw\"",
		"mtime": "2026-08-25T07:02:43.127Z",
		"size": 6618,
		"path": "../public/assets/acpatil-CHSn5C-I.jpeg"
	},
	"/assets/about-C-q_vPr-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32-Tv3Cu2+2s4HLvhGvu3KlyoOueZ4\"",
		"mtime": "2026-08-25T07:02:43.048Z",
		"size": 50,
		"path": "../public/assets/about-C-q_vPr-.js"
	},
	"/assets/about-content-bg-Czvc2Imy.jpg": {
		"type": "image/jpeg",
		"etag": "\"1433d-dpIpnn9AD31EJmMxDL1NMi5PNLc\"",
		"mtime": "2026-08-25T07:02:43.120Z",
		"size": 82749,
		"path": "../public/assets/about-content-bg-Czvc2Imy.jpg"
	},
	"/assets/AmitShah-B3FJsqJV.jpg": {
		"type": "image/jpeg",
		"etag": "\"c209-MJJf2xQOmmbYsWj+Jc/Y7SVrMM8\"",
		"mtime": "2026-08-25T07:02:43.080Z",
		"size": 49673,
		"path": "../public/assets/AmitShah-B3FJsqJV.jpg"
	},
	"/assets/AT_S_Logo.svg-C1Xs4iIR.png": {
		"type": "image/png",
		"etag": "\"8e0c-jCbS5IXH2EOIdiWhNH6JLTrIdJg\"",
		"mtime": "2026-08-25T07:02:43.076Z",
		"size": 36364,
		"path": "../public/assets/AT_S_Logo.svg-C1Xs4iIR.png"
	},
	"/assets/anandi-BM6qYie5.png": {
		"type": "image/png",
		"etag": "\"22397-SLj/7RtBl8goXcwYDAxW5MwQ2WI\"",
		"mtime": "2026-08-25T07:02:43.129Z",
		"size": 140183,
		"path": "../public/assets/anandi-BM6qYie5.png"
	},
	"/assets/bhartee-DQCsoZzg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4a168-Qjt2XKGZBPpZCnj8o8WowdlfI+E\"",
		"mtime": "2026-08-25T07:02:43.131Z",
		"size": 303464,
		"path": "../public/assets/bhartee-DQCsoZzg.jpeg"
	},
	"/assets/bhoruka-D-KxncfB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1f6b-kD+0q1zFOID6a3GXnZZLL1MTurQ\"",
		"mtime": "2026-08-25T07:02:43.131Z",
		"size": 8043,
		"path": "../public/assets/bhoruka-D-KxncfB.jpeg"
	},
	"/assets/Behara-DdTeS6E-.png": {
		"type": "image/png",
		"etag": "\"28146-i8mpm/K9MZg3kLy3e6mwiiIX3iw\"",
		"mtime": "2026-08-25T07:02:43.080Z",
		"size": 164166,
		"path": "../public/assets/Behara-DdTeS6E-.png"
	},
	"/assets/Alkem_Laboratories-C12XxKi2.svg": {
		"type": "image/svg+xml",
		"etag": "\"14bd-uiIlW8PiySLv0kN5sjXGqO0Rb1s\"",
		"mtime": "2026-08-25T07:02:43.078Z",
		"size": 5309,
		"path": "../public/assets/Alkem_Laboratories-C12XxKi2.svg"
	},
	"/assets/ckt-Dff0c5Mv.jpeg": {
		"type": "image/jpeg",
		"etag": "\"253f-ivtYu5pF2Xrlds0hBWwhyJJey8I\"",
		"mtime": "2026-08-25T07:02:43.137Z",
		"size": 9535,
		"path": "../public/assets/ckt-Dff0c5Mv.jpeg"
	},
	"/assets/bv-C7VPcnmJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2e4a-nXcfDAEPUH6n4AyHsAY+4wsFH/s\"",
		"mtime": "2026-08-25T07:02:43.133Z",
		"size": 11850,
		"path": "../public/assets/bv-C7VPcnmJ.jpeg"
	},
	"/assets/building-2-Cx9TGPYc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-vpj9xkaBTGrqaItSyKkqHBQ8Org\"",
		"mtime": "2026-08-25T07:02:43.048Z",
		"size": 372,
		"path": "../public/assets/building-2-Cx9TGPYc.js"
	},
	"/assets/contact-BK8E_JNS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2927-zHiORYYBf4aveAfw8RZGwA2FrU8\"",
		"mtime": "2026-08-25T07:02:43.050Z",
		"size": 10535,
		"path": "../public/assets/contact-BK8E_JNS.js"
	},
	"/assets/consultancy-B39LCYF1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4126-wlb4CvqsxT7YdcGjoCPQsSKx4Cs\"",
		"mtime": "2026-08-25T07:02:43.050Z",
		"size": 16678,
		"path": "../public/assets/consultancy-B39LCYF1.js"
	},
	"/assets/ckt visit-302_zc5K.jpeg": {
		"type": "image/jpeg",
		"etag": "\"56ba2-Li1CbjXgtB/qiK/q4mJgNPBEsLE\"",
		"mtime": "2026-08-25T07:02:43.135Z",
		"size": 355234,
		"path": "../public/assets/ckt visit-302_zc5K.jpeg"
	},
	"/assets/about-B3lTkZOM.mp4": {
		"type": "video/mp4",
		"etag": "\"188c96-A+CM1InmSRyVvUBgXD3baXvPxr4\"",
		"mtime": "2026-08-25T07:02:43.120Z",
		"size": 1608854,
		"path": "../public/assets/about-B3lTkZOM.mp4"
	},
	"/assets/Cox_and_Kings_logo.svg-oB-WLRly.png": {
		"type": "image/png",
		"etag": "\"2a1f2-Mvx4An4CKL+HRdIevpSJCEYiRT0\"",
		"mtime": "2026-08-25T07:02:43.082Z",
		"size": 172530,
		"path": "../public/assets/Cox_and_Kings_logo.svg-oB-WLRly.png"
	},
	"/assets/courses-DFQrE1t0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ada-UTZIX3k9OhRTpfcor5I3iwYUEGA\"",
		"mtime": "2026-08-25T07:02:43.052Z",
		"size": 15066,
		"path": "../public/assets/courses-DFQrE1t0.js"
	},
	"/assets/dmart-IsElBsZ5.png": {
		"type": "image/png",
		"etag": "\"1385-qcjL86GnCxNdXJ7ovoiKQV/9U7I\"",
		"mtime": "2026-08-25T07:02:43.145Z",
		"size": 4997,
		"path": "../public/assets/dmart-IsElBsZ5.png"
	},
	"/assets/csmu meeting-DutVMgqX.jpeg": {
		"type": "image/jpeg",
		"etag": "\"49ba8-wA1nJQlm1gv+LJzGPSCY2T0VGoA\"",
		"mtime": "2026-08-25T07:02:43.143Z",
		"size": 301992,
		"path": "../public/assets/csmu meeting-DutVMgqX.jpeg"
	},
	"/assets/Dr.Jayant-CFbFZB_l.jpg": {
		"type": "image/jpeg",
		"etag": "\"96ff-g3pmtDgcvQdaVpx5XT0SDbMvHdk\"",
		"mtime": "2026-08-25T07:02:43.086Z",
		"size": 38655,
		"path": "../public/assets/Dr.Jayant-CFbFZB_l.jpg"
	},
	"/assets/Devanand shinde-CzxF_65U.jpeg": {
		"type": "image/jpeg",
		"etag": "\"9cf8-v56Y6UtDLyN1jiZISde0BoyBrxM\"",
		"mtime": "2026-08-25T07:02:43.084Z",
		"size": 40184,
		"path": "../public/assets/Devanand shinde-CzxF_65U.jpeg"
	},
	"/assets/DYPCET_Logo-Ca0Don5W.jpg": {
		"type": "image/jpeg",
		"etag": "\"daa6-G4NIknvEMx0Nku7J5XjywXcjAE4\"",
		"mtime": "2026-08-25T07:02:43.084Z",
		"size": 55974,
		"path": "../public/assets/DYPCET_Logo-Ca0Don5W.jpg"
	},
	"/assets/dy patil-XnW-rTTR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"51cf1-I00mPmQOlNTDeUxBpVwH5M8OB8E\"",
		"mtime": "2026-08-25T07:02:43.147Z",
		"size": 335089,
		"path": "../public/assets/dy patil-XnW-rTTR.jpeg"
	},
	"/assets/emailService-DIv9y50G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f6-eASRr2BpbuLmpjuYlurkJU7iWc4\"",
		"mtime": "2026-08-25T07:02:43.052Z",
		"size": 1782,
		"path": "../public/assets/emailService-DIv9y50G.js"
	},
	"/assets/gallery-BCXXkGvr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"563-qKUcVvP4Gq5I2ATQHnNvq/kLTBw\"",
		"mtime": "2026-08-25T07:02:43.054Z",
		"size": 1379,
		"path": "../public/assets/gallery-BCXXkGvr.js"
	},
	"/assets/ITC_Logo-BhAIPK51.jpg": {
		"type": "image/jpeg",
		"etag": "\"c4c7-juYyuMiQHxabIPNhTEW1y387vwE\"",
		"mtime": "2026-08-25T07:02:43.094Z",
		"size": 50375,
		"path": "../public/assets/ITC_Logo-BhAIPK51.jpg"
	},
	"/assets/index-Cq2C8Pw2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e329-ktuTO9ak7tFO+cUZWIXy5su9xBQ\"",
		"mtime": "2026-08-25T07:02:43.044Z",
		"size": 385833,
		"path": "../public/assets/index-Cq2C8Pw2.js"
	},
	"/assets/itm-BZ8bU0GY.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1f25-ONLrYctyw7ndYte9K8557SRCtzU\"",
		"mtime": "2026-08-25T07:02:43.149Z",
		"size": 7973,
		"path": "../public/assets/itm-BZ8bU0GY.jpeg"
	},
	"/assets/hero-bg-new-CjPlQYnH.jpg": {
		"type": "image/jpeg",
		"etag": "\"26622-uRpsv3G6Io3wu5sQ2tvySeHQVmQ\"",
		"mtime": "2026-08-25T07:02:43.149Z",
		"size": 157218,
		"path": "../public/assets/hero-bg-new-CjPlQYnH.jpg"
	},
	"/assets/kle-D4zEvBu5.png": {
		"type": "image/png",
		"etag": "\"1e34-7THTBjAcnNy4lkuddyOb5iw0JDQ\"",
		"mtime": "2026-08-25T07:02:43.153Z",
		"size": 7732,
		"path": "../public/assets/kle-D4zEvBu5.png"
	},
	"/assets/jamna-B7DHyr85.png": {
		"type": "image/png",
		"etag": "\"17cc-zVPebrocfjOcsNLIroGIlMAjSTE\"",
		"mtime": "2026-08-25T07:02:43.151Z",
		"size": 6092,
		"path": "../public/assets/jamna-B7DHyr85.png"
	},
	"/assets/KPIT_Cummins_logo.svg-DG0RUK-o.png": {
		"type": "image/png",
		"etag": "\"1116f-F+sWeK2JTPNDnUveiUwkjeRw10w\"",
		"mtime": "2026-08-25T07:02:43.096Z",
		"size": 69999,
		"path": "../public/assets/KPIT_Cummins_logo.svg-DG0RUK-o.png"
	},
	"/assets/kurlon-vector-logo-DoSA0TYE.png": {
		"type": "image/png",
		"etag": "\"132e-FfsO7FfGmS9s5Bbg92Ss+T8voJ0\"",
		"mtime": "2026-08-25T07:02:43.154Z",
		"size": 4910,
		"path": "../public/assets/kurlon-vector-logo-DoSA0TYE.png"
	},
	"/assets/Liberty_General_Insurance-axk-oMZO.jpg": {
		"type": "image/jpeg",
		"etag": "\"273d-EigY268UZ+TXm4siqQ9G95g/BZg\"",
		"mtime": "2026-08-25T07:02:43.098Z",
		"size": 10045,
		"path": "../public/assets/Liberty_General_Insurance-axk-oMZO.jpg"
	},
	"/assets/logo-C9isAM7k.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2dff3-V+m4cWTBXQ7o2JwbvtWAzG0ZWhA\"",
		"mtime": "2026-08-25T07:02:43.158Z",
		"size": 188403,
		"path": "../public/assets/logo-C9isAM7k.jpeg"
	},
	"/assets/Logo_Bayer.svg-FTYTzHBF.png": {
		"type": "image/png",
		"etag": "\"1155a-NODKsJ/e5gzNYJJ1NrX29GzMqQ0\"",
		"mtime": "2026-08-25T07:02:43.098Z",
		"size": 71002,
		"path": "../public/assets/Logo_Bayer.svg-FTYTzHBF.png"
	},
	"/assets/manipal-CCPJZ7Ov.png": {
		"type": "image/png",
		"etag": "\"1406-hIPEM1TaRlmvBcQ2+IGjKGJRjOM\"",
		"mtime": "2026-08-25T07:02:43.162Z",
		"size": 5126,
		"path": "../public/assets/manipal-CCPJZ7Ov.png"
	},
	"/assets/metro-cash-carry-logo-png_seeklogo-239721-DNjUvWJR.png": {
		"type": "image/png",
		"etag": "\"1f71-X6xdrDlPZklOpBv8pTaAM918j6A\"",
		"mtime": "2026-08-25T07:02:43.164Z",
		"size": 8049,
		"path": "../public/assets/metro-cash-carry-logo-png_seeklogo-239721-DNjUvWJR.png"
	},
	"/assets/Dr.Nishakant Visit HBSU-DX_75GLx.png": {
		"type": "image/png",
		"etag": "\"1e4068-OAVTp9HeMV479xGB1bEDlGfG840\"",
		"mtime": "2026-08-25T07:02:43.094Z",
		"size": 1982568,
		"path": "../public/assets/Dr.Nishakant Visit HBSU-DX_75GLx.png"
	},
	"/assets/MGM_Institute_of_Health_Sciences_Logo-BO8dR5aY.png": {
		"type": "image/png",
		"etag": "\"22b79-164CuBJ6bR1IaOBARfZNL1cQ2Sk\"",
		"mtime": "2026-08-25T07:02:43.100Z",
		"size": 142201,
		"path": "../public/assets/MGM_Institute_of_Health_Sciences_Logo-BO8dR5aY.png"
	},
	"/assets/mookwang kim-BnkptyBe.jpeg": {
		"type": "image/jpeg",
		"etag": "\"83d4-490n/zasdEspx9qIKluoMbbe0Jo\"",
		"mtime": "2026-08-25T07:02:43.167Z",
		"size": 33748,
		"path": "../public/assets/mookwang kim-BnkptyBe.jpeg"
	},
	"/assets/morden-CbTt-nzl.jpeg": {
		"type": "image/jpeg",
		"etag": "\"31145-GPOS0xpbHRq6LLbGRXNmxl/CzB8\"",
		"mtime": "2026-08-25T07:02:43.169Z",
		"size": 201029,
		"path": "../public/assets/morden-CbTt-nzl.jpeg"
	},
	"/assets/Mr.NeerajKumar-FVd0YRum.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1d64d-Hy4cAXCOeHCuXYzlDVNnHfBgnh8\"",
		"mtime": "2026-08-25T07:02:43.102Z",
		"size": 120397,
		"path": "../public/assets/Mr.NeerajKumar-FVd0YRum.jpeg"
	},
	"/assets/mr.saud-CyoaPpzq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6dc6-OUC3lYxcRpfREe0pOaxK3w8AyhM\"",
		"mtime": "2026-08-25T07:02:43.175Z",
		"size": 28102,
		"path": "../public/assets/mr.saud-CyoaPpzq.jpeg"
	},
	"/assets/ncrd-xdSXfNW4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1af5-ORz4RXMsi6KY0j8bYRW8n0fTRuA\"",
		"mtime": "2026-08-25T07:02:43.177Z",
		"size": 6901,
		"path": "../public/assets/ncrd-xdSXfNW4.jpeg"
	},
	"/assets/Ohja-IdNhwKpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1a300-P5n4lrPx3ziE+l8m142CnKLnzUI\"",
		"mtime": "2026-08-25T07:02:43.102Z",
		"size": 107264,
		"path": "../public/assets/Ohja-IdNhwKpg.jpeg"
	},
	"/assets/patkar-BanZqKTd.png": {
		"type": "image/png",
		"etag": "\"1789-7MxS/7LnoF9LwjVh/ISC7F0ZfxM\"",
		"mtime": "2026-08-25T07:02:43.185Z",
		"size": 6025,
		"path": "../public/assets/patkar-BanZqKTd.png"
	},
	"/assets/placement-C2D4I1Fv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b50-oM7bz8exsoPUoq5xoY5CtZf0zc0\"",
		"mtime": "2026-08-25T07:02:43.058Z",
		"size": 2896,
		"path": "../public/assets/placement-C2D4I1Fv.js"
	},
	"/assets/police-DNo0U4QH.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3a1ed-wzi83lGemsMl2e2nNKZABThH0UE\"",
		"mtime": "2026-08-25T07:02:43.187Z",
		"size": 238061,
		"path": "../public/assets/police-DNo0U4QH.jpeg"
	},
	"/assets/Prajkta-B5Klr3Qx.jpg": {
		"type": "image/jpeg",
		"etag": "\"71f8-ekiRNCZJsshWJaS3aGzISGALyEM\"",
		"mtime": "2026-08-25T07:02:43.106Z",
		"size": 29176,
		"path": "../public/assets/Prajkta-B5Klr3Qx.jpg"
	},
	"/assets/Reveal-DKfrj09E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8c2-aO9yvm+x+tEp0+cL5xvPyQ/Z7gQ\"",
		"mtime": "2026-08-25T07:02:43.046Z",
		"size": 121026,
		"path": "../public/assets/Reveal-DKfrj09E.js"
	},
	"/assets/qtar meeting-DgUPXroQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"65de4-Ip2LO8ouZfIhA/BZ4Y6GqTxelBo\"",
		"mtime": "2026-08-25T07:02:43.187Z",
		"size": 417252,
		"path": "../public/assets/qtar meeting-DgUPXroQ.jpg"
	},
	"/assets/routes-DthKG0Lq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a7c-1uFdQE77ts/AiKAKD5CARb0qWxQ\"",
		"mtime": "2026-08-25T07:02:43.060Z",
		"size": 23164,
		"path": "../public/assets/routes-DthKG0Lq.js"
	},
	"/assets/Sandip-B6dCEtQy.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5432-tKW9dyNws7K9Sp9mQy46mHs4qXA\"",
		"mtime": "2026-08-25T07:02:43.108Z",
		"size": 21554,
		"path": "../public/assets/Sandip-B6dCEtQy.jpeg"
	},
	"/assets/sasken-BkTKxH3q.png": {
		"type": "image/png",
		"etag": "\"1959-LvMsjz1+MlzvBliLmulGSrLTGI4\"",
		"mtime": "2026-08-25T07:02:43.191Z",
		"size": 6489,
		"path": "../public/assets/sasken-BkTKxH3q.png"
	},
	"/assets/saziya-CS9y7q5u.png": {
		"type": "image/png",
		"etag": "\"2b553-09XQLJloL7TSTLj8LiG4ohrpZcM\"",
		"mtime": "2026-08-25T07:02:43.193Z",
		"size": 177491,
		"path": "../public/assets/saziya-CS9y7q5u.png"
	},
	"/assets/sies-D-gbPag9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"28ef-K+fRqiCwiY+V325bgcA2WClEjy8\"",
		"mtime": "2026-08-25T07:02:43.195Z",
		"size": 10479,
		"path": "../public/assets/sies-D-gbPag9.jpeg"
	},
	"/assets/site-BtBSXMZf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"642f-OA8n3KOMCYPxRAJcp5fXo2mO8h4\"",
		"mtime": "2026-08-25T07:02:43.062Z",
		"size": 25647,
		"path": "../public/assets/site-BtBSXMZf.js"
	},
	"/assets/mission-ai-sCR5ar47.jpg": {
		"type": "image/jpeg",
		"etag": "\"e5578-wXtQGAbJKpr2hu+CuDvIBzPNBJ0\"",
		"mtime": "2026-08-25T07:02:43.167Z",
		"size": 939384,
		"path": "../public/assets/mission-ai-sCR5ar47.jpg"
	},
	"/assets/somya-DWyg1b6j.png": {
		"type": "image/png",
		"etag": "\"1e2f-7zrfMQ4EIID+AXF9BHQcoUIWTv4\"",
		"mtime": "2026-08-25T07:02:43.195Z",
		"size": 7727,
		"path": "../public/assets/somya-DWyg1b6j.png"
	},
	"/assets/sparkles-O7AISvNq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-xPwr4vPRG0YZZgSqqtpm+Q0fXEY\"",
		"mtime": "2026-08-25T07:02:43.064Z",
		"size": 483,
		"path": "../public/assets/sparkles-O7AISvNq.js"
	},
	"/assets/south korea visit-BoaQ1jo1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"524f0-YX2de7o7o/BEdAQI0aaoKSfRUmQ\"",
		"mtime": "2026-08-25T07:02:43.197Z",
		"size": 337136,
		"path": "../public/assets/south korea visit-BoaQ1jo1.jpeg"
	},
	"/assets/st-D6z7qW_N.jpeg": {
		"type": "image/jpeg",
		"etag": "\"346a-ewFFHqitVPMq8AhEYM1IGA7UCJM\"",
		"mtime": "2026-08-25T07:02:43.199Z",
		"size": 13418,
		"path": "../public/assets/st-D6z7qW_N.jpeg"
	},
	"/assets/styles-C5FL2rHU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d3f3-dRDGkjBPbDMFnBsxn8sCqaWb0Uc\"",
		"mtime": "2026-08-25T07:02:43.201Z",
		"size": 119795,
		"path": "../public/assets/styles-C5FL2rHU.css"
	},
	"/assets/tata-EediMb6X.png": {
		"type": "image/png",
		"etag": "\"f5b-r58+ZtJPC21RyVCMzFpJCMzjQ9c\"",
		"mtime": "2026-08-25T07:02:43.201Z",
		"size": 3931,
		"path": "../public/assets/tata-EediMb6X.png"
	},
	"/assets/titan-CCz8d1hJ.png": {
		"type": "image/png",
		"etag": "\"f66-iEaRFkG2ASZ7c0iBhxSN0vGLHeA\"",
		"mtime": "2026-08-25T07:02:43.205Z",
		"size": 3942,
		"path": "../public/assets/titan-CCz8d1hJ.png"
	},
	"/assets/unnamed-DLVI8Kb9.webp": {
		"type": "image/webp",
		"etag": "\"2a30-ny4GoaDkleyJKhwjLGs90ANuwMM\"",
		"mtime": "2026-08-25T07:02:43.211Z",
		"size": 10800,
		"path": "../public/assets/unnamed-DLVI8Kb9.webp"
	},
	"/assets/USHA_Logo.pdf-DEoydzqP.jpg": {
		"type": "image/jpeg",
		"etag": "\"8329-8U5XU+bENAFkpXBWCzFfG8EMVJs\"",
		"mtime": "2026-08-25T07:02:43.111Z",
		"size": 33577,
		"path": "../public/assets/USHA_Logo.pdf-DEoydzqP.jpg"
	},
	"/assets/Verma-CJo9Wx_E.jpg": {
		"type": "image/jpeg",
		"etag": "\"7874-Lb+2880RTvlsoGBF5cBsZ8id9SY\"",
		"mtime": "2026-08-25T07:02:43.113Z",
		"size": 30836,
		"path": "../public/assets/Verma-CJo9Wx_E.jpg"
	},
	"/assets/vidyalankar-SCsA7IHK.jpeg": {
		"type": "image/jpeg",
		"etag": "\"47ddb-7pow2Gq1sVyUvEue4uip+Xsr8gU\"",
		"mtime": "2026-08-25T07:02:43.211Z",
		"size": 294363,
		"path": "../public/assets/vidyalankar-SCsA7IHK.jpeg"
	},
	"/assets/wilfred-XtH03e9F.jpg": {
		"type": "image/jpeg",
		"etag": "\"39819-Vi9TH9bXrcDHATAZTVXgQUSQKQk\"",
		"mtime": "2026-08-25T07:02:43.215Z",
		"size": 235545,
		"path": "../public/assets/wilfred-XtH03e9F.jpg"
	},
	"/assets/Wipro_Primary_Logo_Color_RGB.svg-C1EhNplL.png": {
		"type": "image/png",
		"etag": "\"3ab5a-Ky0HpLHOOmt1p+CEikpQiW/EEzg\"",
		"mtime": "2026-08-25T07:02:43.115Z",
		"size": 240474,
		"path": "../public/assets/Wipro_Primary_Logo_Color_RGB.svg-C1EhNplL.png"
	},
	"/assets/vision-ai-t9DwD-gd.jpg": {
		"type": "image/jpeg",
		"etag": "\"110300-m4/Yaqr1isL9+ePHXnR9+ilkpwI\"",
		"mtime": "2026-08-25T07:02:43.213Z",
		"size": 1114880,
		"path": "../public/assets/vision-ai-t9DwD-gd.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_b6AXEt = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_b6AXEt
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
