"use strict";(()=>{var Ye=Object.create;var le=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty;var c=(s=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(s,{get:(e,r)=>(typeof require!="undefined"?require:e)[r]}):s)(function(s){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+s+'" is not supported')});var Xe=(s,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of He(e))!je.call(s,i)&&i!==r&&le(s,i,{get:()=>e[i],enumerable:!(t=we(e,i))||t.enumerable});return s};var I=(s,e,r)=>(r=s!=null?Ye(Ue(s)):{},Xe(e||!s||!s.__esModule?le(r,"default",{value:s,enumerable:!0}):r,s));var o=(s,e,r,t)=>{for(var i=t>1?void 0:t?we(e,r):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(t?n(e,r,i):n(i))||i);return t&&i&&le(e,r,i),i};var h=(s,e,r)=>new Promise((t,i)=>{var a=p=>{try{l(r.next(p))}catch(u){i(u)}},n=p=>{try{l(r.throw(p))}catch(u){i(u)}},l=p=>p.done?t(p.value):Promise.resolve(p.value).then(a,n);l((r=r.apply(s,e)).next())});var Be=I(c("atob"));var ye;try{window.crypto,ye=c("bls-eth-wasm/browser")}catch(s){ye=c("bls-eth-wasm")}var y=ye;var Ke=c("js-base64");var m=c("class-validator");var Te=I(c("underscore")),d=c("class-validator");var f=c("class-validator");var J=c("class-validator");var Ae=c("js-base64");var ue;try{window.crypto,ue=c("jsencrypt").JSEncrypt}catch(s){ue=c("node-jsencrypt")}var C=ue;var F=c("js-base64");var x=class extends Error{constructor(r,t){super(t);this.operator=r}},D=class{constructor(e,r){this.RAW_OPERATOR_PUBLIC_KEY_SIGNATURE=RegExp(/------BEGIN RSA PUBLIC KEY-----/,"gmi");this.operators=e.map(t=>this.RAW_OPERATOR_PUBLIC_KEY_SIGNATURE.test(t)?t:(0,F.decode)(t)),this.shares=r}encrypt(){let e=[];return Object.keys(this.operators).forEach(r=>{let t=new C({});try{t.setPublicKey(this.operators[r])}catch(n){throw new x({rsa:this.operators[r],base64:(0,F.encode)(this.operators[r])},`Operator is not valid RSA Public Key: ${n}`)}let i=t.encrypt(this.shares[r].privateKey),a={operatorPublicKey:this.operators[r],privateKey:String(i),publicKey:this.shares[r].publicKey};return e.push(a),a}),e}};var xe=s=>{try{let e="Invalid operator key format, make sure the operator exists in the network",r=(0,Ae.decode)(s);if(s.length<98)throw Error("The length of the operator public key must be at least 98 characters.");if(!r.startsWith("-----BEGIN RSA PUBLIC KEY-----"))throw Error(e);let t=new C({});try{t.setPublicKey(r)}catch(i){throw new x({rsa:r,base64:s},e)}return!0}catch(e){let{message:r}=e;return r}};var $=class extends Error{constructor(r,t){super(t);this.operator=r}},M=class extends Error{constructor(r,t){super(t);this.operator=r}},T=class extends Error{constructor(r,t,i){super(i);this.listOne=r,this.listTwo=t}},z=class extends Error{constructor(r,t){super(t);this.publicKey=r}};var N=class{validate(e){let r=xe(e);if(r!==!0)throw new z(e,`${r}`);return!0}defaultMessage(){return"Invalid operator public key"}};N=o([(0,J.ValidatorConstraint)({name:"operatorPublicKey",async:!1})],N);function De(s){return function(e,r){(0,J.registerDecorator)({target:e.constructor,propertyName:r,options:s,constraints:[],validator:N})}}var O=class{setData(e){e.id&&(this.id=e.id),e.publicKey&&(this.publicKey=e.publicKey)}validate(){(0,f.validateSync)(this)}};o([(0,f.IsNotEmpty)({message:"The operator id is null"}),(0,f.IsDefined)({message:"The operator id is undefined"}),(0,f.IsInt)({message:"The operator id must be an integer"})],O.prototype,"id",2),o([(0,f.IsNotEmpty)({message:"The operator public key is null"}),(0,f.IsDefined)({message:"The operator public key is undefined"}),(0,f.IsString)({message:"The operator public key must be a string"}),De()],O.prototype,"publicKey",2);var E=c("class-validator");var W=c("class-validator");var B=class{validate(e,r){let[t,i]=r.constraints,a=r.object[t].length;if(!Array.isArray(e))Object.values(e).forEach(n=>{if(a!==n.length)throw new T(r.object[t],e,i.message)});else if(a!==e.length)throw new T(r.object[t],e,i.message);return!0}defaultMessage(){return"The length of the entries lists are not equal"}};B=o([(0,W.ValidatorConstraint)({name:"matchLength",async:!1})],B);function q(s,e){return function(r,t){(0,W.registerDecorator)({target:r.constructor,propertyName:t,options:e,constraints:[s,e],validator:B})}}var Q=c("class-validator");var G=class extends Error{constructor(r,t){super(t);this.publicKey=r}};var L=class{validate(e){return h(this,null,function*(){try{yield y.init(y.BLS12_381),typeof e=="string"?y.deserializeHexStrToPublicKey(e.replace("0x","")):e.forEach(r=>y.deserializeHexStrToPublicKey(r.replace("0x","")))}catch(r){throw new G(e,"Failed to BLS deserialize validator public key")}return!0})}defaultMessage(){return"Invalid public key"}};L=o([(0,Q.ValidatorConstraint)({name:"publicKey",async:!0})],L);function Z(s){return function(e,r){(0,Q.registerDecorator)({target:e.constructor,propertyName:r,options:s,constraints:[],validator:L})}}var ee=c("class-validator"),ke=c("js-base64");var Oe=I(c("web3")),_=new Oe.default,_e=(s,e)=>s.map(r=>{let t=e?Object(r)[e]:r;return String(t).startsWith("0x")?t:_.eth.abi.encodeParameter("string",t)});var Y=class{validate(e){let r="";try{(Array.isArray(e)?e:[e]).forEach(i=>{r=i,(0,ke.decode)(i.startsWith("0x")?_.eth.abi.decodeParameter("string",i):i)})}catch(t){throw Error(`Filed ABI decode shares encrypted key: ${r}. Error: ${t.message}`)}return!0}defaultMessage(){return"Filed ABI decode shares encrypted key"}};Y=o([(0,ee.ValidatorConstraint)({name:"encryptedKey",async:!1})],Y);function Re(s){return function(e,r){(0,ee.registerDecorator)({target:e.constructor,propertyName:r,options:s,constraints:[],validator:Y})}}var k=class{setData(e){e.publicKeys&&(this.publicKeys=e.publicKeys),e.encryptedKeys&&(this.encryptedKeys=e.encryptedKeys)}validate(){(0,E.validateSync)(this)}};o([(0,E.IsArray)(),(0,E.MinLength)(98,{each:!0}),Z({each:!0})],k.prototype,"publicKeys",2),o([(0,E.IsArray)(),(0,E.MinLength)(98,{each:!0}),q("publicKeys",{message:"Length of encrypted and public keys should be equal."}),Re()],k.prototype,"encryptedKeys",2);var re=c("class-validator");var H=class{validate(e){let r=new Set,t=new Set;for(let i of e||[]){if(r.has(i.id))throw new $(i,"Operator ID already exists");if(r.add(i.id),t.has(i.publicKey))throw new M(i,"Operator public key already exists");t.add(i.publicKey)}return!0}defaultMessage(){return"The list of operators contains duplicate entries"}};H=o([(0,re.ValidatorConstraint)({name:"uniqueList",async:!1})],H);function Ve(s){return function(e,r){(0,re.registerDecorator)({target:e.constructor,propertyName:r,options:s,constraints:[],validator:H})}}var K=class{constructor(){this.publicKey=null;this.operators=null;this.shares=null}setData(e){if(e.publicKey&&(this.publicKey=e.publicKey),e.operators&&(this.operators=e.operators.map(r=>{let t=new O;return t.setData(r),t})),e.shares){let r=new k;Te.default.isArray(e.shares)?r.setData({publicKeys:e.shares.map(t=>t.publicKey),encryptedKeys:e.shares.map(t=>t.privateKey)}):r.setData(e.shares),this.shares=r}}validate(){return h(this,null,function*(){(0,d.validateSync)(this)})}get sharesPublicKeys(){var e;return((e=this.shares)==null?void 0:e.publicKeys)||[]}get sharesEncryptedKeys(){var e;return((e=this.shares)==null?void 0:e.encryptedKeys)||[]}get operatorIds(){var e;return(e=this.operators)!=null&&e.length?this.operators.map(r=>parseInt(String(r.id),10)):[]}get operatorPublicKeys(){var e;return(e=this.operators)!=null&&e.length?this.operators.map(r=>String(r.publicKey)):[]}};o([(0,d.IsOptional)(),(0,d.IsString)(),(0,d.Length)(98,98),Z()],K.prototype,"publicKey",2),o([(0,d.IsOptional)(),(0,d.ValidateNested)({each:!0}),Ve()],K.prototype,"operators",2),o([(0,d.IsOptional)(),(0,d.ValidateNested)(),q("operators",{message:"Length of operators and shares should be equal."})],K.prototype,"shares",2);var he=I(c("underscore"));var v=c("class-validator");var P=class{constructor(){this.readable=null;this.raw=null}build(e){return[e.validatorPublicKey,e.operatorsIds.join(","),e.encryptedShares.map(r=>r.publicKey),_e(e.encryptedShares,"privateKey"),e.ssvAmount]}setData(e){if(!e===null){this.raw=null,this.readable=null;return}if(he.default.isArray(e)){this.raw=this.toRaw(e),this.readable=this.toReadable(e);return}he.default.isObject(e)&&(e.readable&&(this.readable=e.readable),e.raw&&(this.raw=e.raw))}toRaw(e){return e.join(",")}toReadable(e){return{validatorPublicKey:e[P.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY],operatorIds:e[P.PAYLOAD_INDEX_OPERATOR_IDS],sharePublicKeys:e[P.PAYLOAD_INDEX_SHARE_PUBLIC_KEYS],sharePrivateKey:e[P.PAYLOAD_INDEX_SHARE_PRIVATE_KEYS],ssvAmount:e[P.PAYLOAD_INDEX_SSV_AMOUNT]}}validate(){return h(this,null,function*(){})}},g=P;g.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY=0,g.PAYLOAD_INDEX_OPERATOR_IDS=1,g.PAYLOAD_INDEX_SHARE_PUBLIC_KEYS=2,g.PAYLOAD_INDEX_SHARE_PRIVATE_KEYS=3,g.PAYLOAD_INDEX_SSV_AMOUNT=4,o([(0,v.IsOptional)(),(0,v.IsObject)()],g.prototype,"readable",2),o([(0,v.IsOptional)(),(0,v.IsString)()],g.prototype,"raw",2);var te=class extends K{};var me=I(c("underscore")),se=I(c("ethers")),w=c("class-validator");var R=class{constructor(){this.readable=null;this.raw=null}decodeRSAShares(e){return e.map(r=>"0x"+Buffer.from(r,"base64").toString("hex"))}sharesToBytes(e,r){let t=this.decodeRSAShares(r),i=new Uint8Array(e.map(u=>[...se.utils.arrayify(u)]).flat()),a=new Uint8Array(t.map(u=>[...se.utils.arrayify(u)]).flat()),n=se.utils.hexlify(i),l=String(n.length.toString(16)).padStart(4,"0"),p=Buffer.concat([i,a]);return`0x${l}${p.toString("hex")}`}build(e){return[e.validatorPublicKey,e.operatorsIds.join(","),this.sharesToBytes(e.encryptedShares.map(r=>r.publicKey),e.encryptedShares.map(r=>r.privateKey)),e.ssvAmount]}setData(e){if(!e===null){this.raw=null,this.readable=null;return}if(me.default.isArray(e)){this.raw=this.toRaw(e),this.readable=this.toReadable(e);return}me.default.isObject(e)&&(e.readable&&(this.readable=e.readable),e.raw&&(this.raw=e.raw))}toRaw(e){return e.join(",")}toReadable(e){return{validatorPublicKey:e[R.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY],operatorIds:e[R.PAYLOAD_INDEX_OPERATOR_IDS],shares:e[R.PAYLOAD_INDEX_SHARES_KEYS],ssvAmount:e[R.PAYLOAD_INDEX_SSV_AMOUNT]}}validate(){}},b=R;b.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY=0,b.PAYLOAD_INDEX_OPERATOR_IDS=1,b.PAYLOAD_INDEX_SHARES_KEYS=2,b.PAYLOAD_INDEX_SSV_AMOUNT=3,o([(0,w.IsOptional)(),(0,w.IsObject)()],b.prototype,"readable",2),o([(0,w.IsOptional)(),(0,w.IsString)()],b.prototype,"raw",2);var V=class{constructor({version:e}){this.byVersion={payload:{[V.VERSION_V2]:g,[V.VERSION_V3]:b},data:{[V.VERSION_V2]:K,[V.VERSION_V3]:te}};this.version=e,this.data=this.getByVersion("data",e),this.payload=this.getByVersion("payload",e)}generateContractPayload(e){var t;let r=this.payload.build(e);return(t=this.payload)==null||t.setData(r),this.payload}setData(e){!e||(this.data.setData(e),this.validate())}getByVersion(e,r){if(!this.byVersion[e])throw Error(`"${e}" is unknown entity`);if(!this.byVersion[e][r])throw Error(`"${e}" is not supported in version of key shares: ${r}`);return new this.byVersion[e][r]}validate(){(0,m.validateSync)(this)}fromJson(e){return typeof e=="string"&&(e=JSON.parse(e)),this.setData(e.data),this}toJson(){return JSON.stringify({version:this.version,data:this.data||null,payload:this.payload||null,createdAt:new Date().toISOString()},null,"  ")}},S=V;S.VERSION_V2="v2",S.VERSION_V3="v3",o([(0,m.IsString)(),(0,m.IsDefined)(),(0,m.IsNotEmpty)()],S.prototype,"version",2),o([(0,m.IsOptional)(),(0,m.ValidateNested)()],S.prototype,"data",2),o([(0,m.IsOptional)(),(0,m.ValidateNested)()],S.prototype,"payload",2);var de=class extends Error{constructor(r,t){super(t);this.operators=r}},fe=class extends Error{constructor(r,t){super(t);this.operator=r}},ge=class{constructor(){this.shares=[]}static get DEFAULT_THRESHOLD_NUMBER(){return 3}create(e,r){return h(this,null,function*(){r.map(l=>{if(!Number.isInteger(l))throw new fe(l,`Operator must be integer. Got: ${String(l)}`)});let t=(r.length-1)/3;if(!Number.isInteger(t))throw new de(r,"Invalid operators length. It should satisfy conditions: \u2016 Operators \u2016 := 3 * F + 1 ; F \u2208 \u2115");yield y.init(y.BLS12_381);let i=[],a=[];this.validatorPrivateKey=y.deserializeHexStrToSecretKey(e),this.validatorPublicKey=this.validatorPrivateKey.getPublicKey(),i.push(this.validatorPrivateKey),a.push(this.validatorPublicKey);for(let l=1;l<r.length-t;l+=1){let p=new y.SecretKey;p.setByCSPRNG(),i.push(p);let u=p.getPublicKey();a.push(u)}for(let l of r){let p=new y.Id;p.setInt(l);let u=new y.SecretKey;u.share(i,p);let A=new y.PublicKey;A.share(a,p),this.shares.push({privateKey:`0x${u.serializeToHexStr()}`,publicKey:`0x${A.serializeToHexStr()}`,id:p})}return{validatorPrivateKey:`0x${this.validatorPrivateKey.serializeToHexStr()}`,validatorPublicKey:`0x${this.validatorPublicKey.serializeToHexStr()}`,shares:this.shares}})}},ie=ge;var be=I(c("crypto")),Ne=c("scrypt-js"),ae=I(c("ethereumjs-wallet")),oe=c("ethereumjs-util");var Se=class{constructor(e){this.privateKey="";if(!e)throw new Error("Key store data should be JSON or string");if(typeof e=="string"?this.keyStoreData=JSON.parse(e):this.keyStoreData=e,!this.keyStoreData.version)throw new Error("Invalid keystore file")}getPublicKey(){var e;if(this.keyStoreData)switch((e=this.keyStoreData.version)!=null?e:this.keyStoreData.Version){case 1:return this.keyStoreData.Address;case 3:return this.keyStoreData.id;case 4:return this.keyStoreData.pubkey}return""}getPrivateKey(e=""){return h(this,null,function*(){if(this.privateKey)return this.privateKey;switch(this.keyStoreData.version){case 1:this.wallet=yield ae.default.fromV1(this.keyStoreData,e);break;case 3:this.wallet=yield ae.default.fromV3(this.keyStoreData,e,!0);break;case 4:this.wallet=yield this.fromV4(this.keyStoreData,e);break}if(this.wallet&&(this.privateKey=this.wallet.getPrivateKey().toString("hex"),!this.privateKey))throw new Error("Invalid password");return this.privateKey})}fromV4(e,r){return h(this,null,function*(){let t=typeof e=="object"?e:JSON.parse(e);if(t.version!==4)throw new Error("Not a V4 wallet");let i,a;if(t.crypto.kdf.function==="scrypt")a=t.crypto.kdf.params,i=(0,Ne.syncScrypt)(Buffer.from(r),Buffer.from(a.salt,"hex"),a.n,a.r,a.p,a.dklen);else if(t.crypto.kdf.function==="pbkdf2"){if(a=t.crypto.kdf.params,a.prf!=="hmac-sha256")throw new Error("Unsupported parameters to PBKDF2");i=be.default.pbkdf2Sync(Buffer.from(r),Buffer.from(a.salt,"hex"),a.c,a.dklen,"sha256")}else throw new Error("Unsupported key derivation scheme");let n=Buffer.from(t.crypto.cipher.message,"hex"),l=Buffer.concat([Buffer.from(i.slice(16,32)),n]),u={keccak256:oe.keccak256,sha256:oe.sha256}[t.crypto.checksum.function];if(u(l).toString("hex")!==t.crypto.checksum.message)throw new Error("Invalid password");let j=be.default.createDecipheriv(t.crypto.cipher.function,i.slice(0,16),Buffer.from(t.crypto.cipher.params.iv,"hex")),X=this.runCipherBuffer(j,n);return new ae.default(X)})}runCipherBuffer(e,r){return Buffer.concat([e.update(r),e.final()])}static toHexString(e){return Array.from(e,r=>`0${(r&255).toString(16)}`.slice(-2)).join("")}},ne=Se;var ce=class{constructor(e){if(!Object.values(ce.VERSION).includes(e))throw Error("Version is not supported");this.version=e,this.keySharesInstance=new S({version:this.version})}get keyShares(){return this.keySharesInstance}getPrivateKeyFromKeystoreData(e,r){return h(this,null,function*(){try{let t=yield new ne(e).getPrivateKey(r);return yield y.init(y.BLS12_381),this.validatorPrivateKey=`0x${y.deserializeHexStrToSecretKey(t).serializeToHexStr()}`,this.validatorPublicKey=`0x${y.deserializeHexStrToSecretKey(t).getPublicKey().serializeToHexStr()}`,t}catch(t){return t}})}createThreshold(e,r){return h(this,null,function*(){return this.threshold=yield new ie().create(e,r),this.threshold})}encryptShares(e,r,t=""){return h(this,null,function*(){try{let i=e.map(n=>String((0,Ke.encode)((0,Be.default)(n))));return new D(i,r).encrypt().map(n=>(n.operatorPublicKey=(0,Ke.encode)(n.operatorPublicKey),t===ce.SHARES_FORMAT_ABI&&(n.operatorPublicKey=_.eth.abi.encodeParameter("string",n.operatorPublicKey),n.privateKey=_.eth.abi.encodeParameter("string",n.privateKey)),n))}catch(i){return i}})}buildShares(e,r,t){return h(this,null,function*(){let i=yield this.createThreshold(e,r);return this.encryptShares(t,i.shares)})}getThreshold(){return this.threshold}buildPayload(e,r,t,i){return this.keyShares.generateContractPayload({validatorPublicKey:e,operatorsIds:r,encryptedShares:t,ssvAmount:i})}buildPayloadFromKeyShares(e,r){var l,p,u,A,j,X,Ie,Ee,Pe,ve;let t=((p=(l=e.data)==null?void 0:l.shares)==null?void 0:p.publicKeys)||[],i=(u=e.data)==null?void 0:u.publicKey,a=((j=(A=e.data)==null?void 0:A.shares)==null?void 0:j.encryptedKeys)||[],n=((X=e.data)==null?void 0:X.operatorPublicKeys)||[];if(t.length!==a.length||t.length!==n.length||a.length!==n.length||!a.length||!n.length||!t.length)throw Error("Operator public keys and shares public/encrypted keys length does not match or have zero length.");return this.keyShares.generateContractPayload({validatorPublicKey:i,operatorsIds:(Ee=(Ie=e.data)==null?void 0:Ie.operators)==null?void 0:Ee.map(pe=>pe.id),encryptedShares:t.map((pe,Le)=>({publicKey:pe,privateKey:a[Le]})),ssvAmount:r||((ve=(Pe=e.payload)==null?void 0:Pe.readable)==null?void 0:ve.ssvAmount)||0})}},U=ce;U.SHARES_FORMAT_ABI="abi",U.VERSION={V2:"v2",V3:"v3"};})();
