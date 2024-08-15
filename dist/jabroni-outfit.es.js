var Yf = Object.defineProperty;
var Jf = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ut = (e, t, n) => Jf(e, typeof t != "symbol" ? t + "" : t, n);
var Fa = {};
/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const oe = Fa.NODE_ENV !== "production" ? Object.freeze({}) : {}, Hn = Fa.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, fr = () => !1, Pt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), br = (e) => e.startsWith("onUpdate:"), ie = Object.assign, ho = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xf = Object.prototype.hasOwnProperty, se = (e, t) => Xf.call(e, t), j = Array.isArray, _n = (e) => ti(e) === "[object Map]", An = (e) => ti(e) === "[object Set]", Ol = (e) => ti(e) === "[object Date]", Zf = (e) => ti(e) === "[object RegExp]", Y = (e) => typeof e == "function", Q = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", qr = (e) => (le(e) || Y(e)) && Y(e.then) && Y(e.catch), Ha = Object.prototype.toString, ti = (e) => Ha.call(e), mo = (e) => ti(e).slice(8, -1), Ua = (e) => ti(e) === "[object Object]", go = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ Ie(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ba = /* @__PURE__ */ Ie(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), zr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Qf = /-(\w)/g, ge = zr((e) => e.replace(Qf, (t, n) => n ? n.toUpperCase() : "")), ep = /\B([A-Z])/g, Pe = zr(
  (e) => e.replace(ep, "-$1").toLowerCase()
), Ot = zr((e) => e.charAt(0).toUpperCase() + e.slice(1)), yt = zr((e) => e ? `on${Ot(e)}` : ""), Ke = (e, t) => !Object.is(e, t), Jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Wn = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vr = (e) => {
  const t = Q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Sl;
const Un = () => Sl || (Sl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), tn = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, tp = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, np = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error", ip = /* @__PURE__ */ Ie(np), wl = 2;
function rp(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let i = e.split(/(\r?\n)/);
  const r = i.filter((l, a) => a % 2 === 1);
  i = i.filter((l, a) => a % 2 === 0);
  let s = 0;
  const o = [];
  for (let l = 0; l < i.length; l++)
    if (s += i[l].length + (r[l] && r[l].length || 0), s >= t) {
      for (let a = l - wl; a <= l + wl || n > s; a++) {
        if (a < 0 || a >= i.length) continue;
        const c = a + 1;
        o.push(
          `${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${i[a]}`
        );
        const f = i[a].length, u = r[a] && r[a].length || 0;
        if (a === l) {
          const h = t - (s - (f + u)), g = Math.max(
            1,
            n > s ? f - h : n - t
          );
          o.push("   |  " + " ".repeat(h) + "^".repeat(g));
        } else if (a > l) {
          if (n > s) {
            const h = Math.max(Math.min(n - s, f), 1);
            o.push("   |  " + "^".repeat(h));
          }
          s += f + u;
        }
      }
      break;
    }
  return o.join(`
`);
}
function ni(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Q(i) ? ja(i) : ni(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Q(e) || le(e))
    return e;
}
const sp = /;(?![^(]*\))/g, op = /:([^]+)/, lp = /\/\*[^]*?\*\//g;
function ja(e) {
  const t = {};
  return e.replace(lp, "").split(sp).forEach((n) => {
    if (n) {
      const i = n.split(op);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ap(e) {
  let t = "";
  if (!e || Q(e))
    return t;
  for (const n in e) {
    const i = e[n];
    if (Q(i) || typeof i == "number") {
      const r = n.startsWith("--") ? n : Pe(n);
      t += `${r}:${i};`;
    }
  }
  return t;
}
function ii(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const i = ii(e[n]);
      i && (t += i + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function cp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Q(t) && (e.class = ii(t)), n && (e.style = ni(n)), e;
}
const up = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", fp = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", pp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", dp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ka = /* @__PURE__ */ Ie(up), Wa = /* @__PURE__ */ Ie(fp), qa = /* @__PURE__ */ Ie(pp), hp = /* @__PURE__ */ Ie(dp), za = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mp = /* @__PURE__ */ Ie(za), Tl = /* @__PURE__ */ Ie(
  za + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Eo(e) {
  return !!e || e === "";
}
const gp = /* @__PURE__ */ Ie(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), Ep = /* @__PURE__ */ Ie(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function yp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
function _p(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = an(e[i], t[i]);
  return n;
}
function an(e, t) {
  if (e === t) return !0;
  let n = Ol(e), i = Ol(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), i = Qe(t), n || i)
    return e === t;
  if (n = j(e), i = j(t), n || i)
    return n && i ? _p(e, t) : !1;
  if (n = le(e), i = le(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !an(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Gr(e, t) {
  return e.findIndex((n) => an(n, t));
}
const Ga = (e) => !!(e && e.__v_isRef === !0), Ya = (e) => Q(e) ? e : e == null ? "" : j(e) || le(e) && (e.toString === Ha || !Y(e.toString)) ? Ga(e) ? Ya(e.value) : JSON.stringify(e, Ja, 2) : String(e), Ja = (e, t) => Ga(t) ? Ja(e, t.value) : _n(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[ys(i, s) + " =>"] = r, n),
    {}
  )
} : An(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ys(n))
} : Qe(t) ? ys(t) : le(t) && !j(t) && !Ua(t) ? String(t) : t, ys = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Ne = {};
function St(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Je;
class yo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Je, !t && Je && (this.index = (Je.scopes || (Je.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Je;
      try {
        return Je = this, t();
      } finally {
        Je = n;
      }
    } else Ne.NODE_ENV !== "production" && St("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Je = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Je = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function bp(e) {
  return new yo(e);
}
function Xa(e, t = Je) {
  t && t.active && t.effects.push(e);
}
function Za() {
  return Je;
}
function Np(e) {
  Je ? Je.cleanups.push(e) : Ne.NODE_ENV !== "production" && St(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let bn;
class qn {
  constructor(t, n, i, r) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xa(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Lt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (vp(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), $t();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = nn, n = bn;
    try {
      return nn = !0, bn = this, this._runnings++, Dl(this), this.fn();
    } finally {
      Cl(this), this._runnings--, bn = n, nn = t;
    }
  }
  stop() {
    this.active && (Dl(this), Cl(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function vp(e) {
  return e.value;
}
function Dl(e) {
  e._trackId++, e._depsLength = 0;
}
function Cl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Qa(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Qa(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function Op(e, t) {
  e.effect instanceof qn && (e = e.effect.fn);
  const n = new qn(e, pe, () => {
    n.dirty && n.run();
  });
  t && (ie(n, t), t.scope && Xa(n, t.scope)), (!t || !t.lazy) && n.run();
  const i = n.run.bind(n);
  return i.effect = n, i;
}
function Sp(e) {
  e.effect.stop();
}
let nn = !0, Is = 0;
const ec = [];
function Lt() {
  ec.push(nn), nn = !1;
}
function $t() {
  const e = ec.pop();
  nn = e === void 0 ? !0 : e;
}
function _o() {
  Is++;
}
function bo() {
  for (Is--; !Is && As.length; )
    As.shift()();
}
function tc(e, t, n) {
  var i;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Qa(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, Ne.NODE_ENV !== "production" && ((i = e.onTrack) == null || i.call(e, ie({ effect: e }, n)));
  }
}
const As = [];
function nc(e, t, n) {
  var i;
  _o();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (Ne.NODE_ENV !== "production" && ((i = r.onTrigger) == null || i.call(r, ie({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && As.push(r.scheduler)));
  }
  bo();
}
const ic = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Or = /* @__PURE__ */ new WeakMap(), Nn = Symbol(Ne.NODE_ENV !== "production" ? "iterate" : ""), Rs = Symbol(Ne.NODE_ENV !== "production" ? "Map key iterate" : "");
function Me(e, t, n) {
  if (nn && bn) {
    let i = Or.get(e);
    i || Or.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = ic(() => i.delete(n))), tc(
      bn,
      r,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function bt(e, t, n, i, r, s) {
  const o = Or.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && j(e)) {
    const a = Number(i);
    o.forEach((c, f) => {
      (f === "length" || !Qe(f) && f >= a) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        j(e) ? go(n) && l.push(o.get("length")) : (l.push(o.get(Nn)), _n(e) && l.push(o.get(Rs)));
        break;
      case "delete":
        j(e) || (l.push(o.get(Nn)), _n(e) && l.push(o.get(Rs)));
        break;
      case "set":
        _n(e) && l.push(o.get(Nn));
        break;
    }
  _o();
  for (const a of l)
    a && nc(
      a,
      4,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: i,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  bo();
}
function wp(e, t) {
  const n = Or.get(e);
  return n && n.get(t);
}
const Tp = /* @__PURE__ */ Ie("__proto__,__v_isRef,__isVue"), rc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
), Vl = /* @__PURE__ */ Dp();
function Dp() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = ee(this);
      for (let s = 0, o = this.length; s < o; s++)
        Me(i, "get", s + "");
      const r = i[t](...n);
      return r === -1 || r === !1 ? i[t](...n.map(ee)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Lt(), _o();
      const i = ee(this)[t].apply(this, n);
      return bo(), $t(), i;
    };
  }), e;
}
function Cp(e) {
  Qe(e) || (e = String(e));
  const t = ee(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class sc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? pc : fc : s ? uc : cc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = j(t);
    if (!r) {
      if (o && se(Vl, n))
        return Reflect.get(Vl, n, i);
      if (n === "hasOwnProperty")
        return Cp;
    }
    const l = Reflect.get(t, n, i);
    return (Qe(n) ? rc.has(n) : Tp(n)) || (r || Me(t, "get", n), s) ? l : we(l) ? o && go(n) ? l : l.value : le(l) ? r ? vo(l) : Rn(l) : l;
  }
}
class oc extends sc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = wt(s);
      if (!Nt(i) && !wt(i) && (s = ee(s), i = ee(i)), !j(t) && we(s) && !we(i))
        return a ? !1 : (s.value = i, !0);
    }
    const o = j(t) && go(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, i, r);
    return t === ee(r) && (o ? Ke(i, s) && bt(t, "set", n, i, s) : bt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = se(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && i && bt(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Qe(n) || !rc.has(n)) && Me(t, "has", n), i;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      j(t) ? "length" : Nn
    ), Reflect.ownKeys(t);
  }
}
class lc extends sc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ne.NODE_ENV !== "production" && St(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ne.NODE_ENV !== "production" && St(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vp = /* @__PURE__ */ new oc(), xp = /* @__PURE__ */ new lc(), kp = /* @__PURE__ */ new oc(
  !0
), Ip = /* @__PURE__ */ new lc(!0), No = (e) => e, Yr = (e) => Reflect.getPrototypeOf(e);
function Ji(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const r = ee(e), s = ee(t);
  n || (Ke(t, s) && Me(r, "get", t), Me(r, "get", s));
  const { has: o } = Yr(r), l = i ? No : n ? Oo : wi;
  if (o.call(r, t))
    return l(e.get(t));
  if (o.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Xi(e, t = !1) {
  const n = this.__v_raw, i = ee(n), r = ee(e);
  return t || (Ke(e, r) && Me(i, "has", e), Me(i, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Zi(e, t = !1) {
  return e = e.__v_raw, !t && Me(ee(e), "iterate", Nn), Reflect.get(e, "size", e);
}
function xl(e, t = !1) {
  !t && !Nt(e) && !wt(e) && (e = ee(e));
  const n = ee(this);
  return Yr(n).has.call(n, e) || (n.add(e), bt(n, "add", e, e)), this;
}
function kl(e, t, n = !1) {
  !n && !Nt(t) && !wt(t) && (t = ee(t));
  const i = ee(this), { has: r, get: s } = Yr(i);
  let o = r.call(i, e);
  o ? Ne.NODE_ENV !== "production" && ac(i, r, e) : (e = ee(e), o = r.call(i, e));
  const l = s.call(i, e);
  return i.set(e, t), o ? Ke(t, l) && bt(i, "set", e, t, l) : bt(i, "add", e, t), this;
}
function Il(e) {
  const t = ee(this), { has: n, get: i } = Yr(t);
  let r = n.call(t, e);
  r ? Ne.NODE_ENV !== "production" && ac(t, n, e) : (e = ee(e), r = n.call(t, e));
  const s = i ? i.call(t, e) : void 0, o = t.delete(e);
  return r && bt(t, "delete", e, void 0, s), o;
}
function Al() {
  const e = ee(this), t = e.size !== 0, n = Ne.NODE_ENV !== "production" ? _n(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && bt(e, "clear", void 0, void 0, n), i;
}
function Qi(e, t) {
  return function(i, r) {
    const s = this, o = s.__v_raw, l = ee(o), a = t ? No : e ? Oo : wi;
    return !e && Me(l, "iterate", Nn), o.forEach((c, f) => i.call(r, a(c), a(f), s));
  };
}
function er(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = ee(r), o = _n(s), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...i), f = n ? No : t ? Oo : wi;
    return !t && Me(
      s,
      "iterate",
      a ? Rs : Nn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = c.next();
        return h ? { value: u, done: h } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Bt(e) {
  return function(...t) {
    if (Ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      St(
        `${Ot(e)} operation ${n}failed: target is readonly.`,
        ee(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ap() {
  const e = {
    get(s) {
      return Ji(this, s);
    },
    get size() {
      return Zi(this);
    },
    has: Xi,
    add: xl,
    set: kl,
    delete: Il,
    clear: Al,
    forEach: Qi(!1, !1)
  }, t = {
    get(s) {
      return Ji(this, s, !1, !0);
    },
    get size() {
      return Zi(this);
    },
    has: Xi,
    add(s) {
      return xl.call(this, s, !0);
    },
    set(s, o) {
      return kl.call(this, s, o, !0);
    },
    delete: Il,
    clear: Al,
    forEach: Qi(!1, !0)
  }, n = {
    get(s) {
      return Ji(this, s, !0);
    },
    get size() {
      return Zi(this, !0);
    },
    has(s) {
      return Xi.call(this, s, !0);
    },
    add: Bt("add"),
    set: Bt("set"),
    delete: Bt("delete"),
    clear: Bt("clear"),
    forEach: Qi(!0, !1)
  }, i = {
    get(s) {
      return Ji(this, s, !0, !0);
    },
    get size() {
      return Zi(this, !0);
    },
    has(s) {
      return Xi.call(this, s, !0);
    },
    add: Bt("add"),
    set: Bt("set"),
    delete: Bt("delete"),
    clear: Bt("clear"),
    forEach: Qi(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = er(s, !1, !1), n[s] = er(s, !0, !1), t[s] = er(s, !1, !0), i[s] = er(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  Rp,
  Pp,
  Mp,
  Lp
] = /* @__PURE__ */ Ap();
function Jr(e, t) {
  const n = t ? e ? Lp : Mp : e ? Pp : Rp;
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    se(n, r) && r in i ? n : i,
    r,
    s
  );
}
const $p = {
  get: /* @__PURE__ */ Jr(!1, !1)
}, Fp = {
  get: /* @__PURE__ */ Jr(!1, !0)
}, Hp = {
  get: /* @__PURE__ */ Jr(!0, !1)
}, Up = {
  get: /* @__PURE__ */ Jr(!0, !0)
};
function ac(e, t, n) {
  const i = ee(n);
  if (i !== n && t.call(e, i)) {
    const r = mo(e);
    St(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const cc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakMap();
function Bp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bp(mo(e));
}
function Rn(e) {
  return wt(e) ? e : Xr(
    e,
    !1,
    Vp,
    $p,
    cc
  );
}
function dc(e) {
  return Xr(
    e,
    !1,
    kp,
    Fp,
    uc
  );
}
function vo(e) {
  return Xr(
    e,
    !0,
    xp,
    Hp,
    fc
  );
}
function dt(e) {
  return Xr(
    e,
    !0,
    Ip,
    Up,
    pc
  );
}
function Xr(e, t, n, i, r) {
  if (!le(e))
    return Ne.NODE_ENV !== "production" && St(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const o = jp(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? i : n
  );
  return r.set(e, l), l;
}
function rn(e) {
  return wt(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
function Si(e) {
  return e ? !!e.__v_raw : !1;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function hc(e) {
  return Object.isExtensible(e) && Wn(e, "__v_skip", !0), e;
}
const wi = (e) => le(e) ? Rn(e) : e, Oo = (e) => le(e) ? vo(e) : e, Kp = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class mc {
  constructor(t, n, i, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new qn(
      () => t(this._value),
      () => Bn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const t = ee(this);
    return (!t._cacheable || t.effect.dirty) && Ke(t._value, t._value = t.effect.run()) && Bn(t, 4), So(t), t.effect._dirtyLevel >= 2 && (Ne.NODE_ENV !== "production" && this._warnRecursive && St(Kp, `

getter: `, this.getter), Bn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Wp(e, t, n = !1) {
  let i, r;
  const s = Y(e);
  s ? (i = e, r = Ne.NODE_ENV !== "production" ? () => {
    St("Write operation failed: computed value is readonly");
  } : pe) : (i = e.get, r = e.set);
  const o = new mc(i, r, s || !r, n);
  return Ne.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
}
function So(e) {
  var t;
  nn && bn && (e = ee(e), tc(
    bn,
    (t = e.dep) != null ? t : e.dep = ic(
      () => e.dep = void 0,
      e instanceof mc ? e : void 0
    ),
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Bn(e, t = 4, n, i) {
  e = ee(e);
  const r = e.dep;
  r && nc(
    r,
    t,
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: i
    } : void 0
  );
}
function we(e) {
  return !!(e && e.__v_isRef === !0);
}
function vn(e) {
  return gc(e, !1);
}
function qp(e) {
  return gc(e, !0);
}
function gc(e, t) {
  return we(e) ? e : new zp(e, t);
}
class zp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ee(t), this._value = n ? t : wi(t);
  }
  get value() {
    return So(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Nt(t) || wt(t);
    if (t = n ? t : ee(t), Ke(t, this._rawValue)) {
      const i = this._rawValue;
      this._rawValue = t, this._value = n ? t : wi(t), Bn(this, 4, t, i);
    }
  }
}
function Gp(e) {
  Bn(e, 4, Ne.NODE_ENV !== "production" ? e.value : void 0);
}
function wo(e) {
  return we(e) ? e.value : e;
}
function Yp(e) {
  return Y(e) ? e() : wo(e);
}
const Jp = {
  get: (e, t, n) => wo(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return we(r) && !we(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function To(e) {
  return rn(e) ? e : new Proxy(e, Jp);
}
class Xp {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = t(
      () => So(this),
      () => Bn(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ec(e) {
  return new Xp(e);
}
function Zp(e) {
  Ne.NODE_ENV !== "production" && !Si(e) && St("toRefs() expects a reactive object but received a plain one.");
  const t = j(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = yc(e, n);
  return t;
}
class Qp {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return wp(ee(this._object), this._key);
  }
}
class ed {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function td(e, t, n) {
  return we(e) ? e : Y(e) ? new ed(e) : le(e) && arguments.length > 1 ? yc(e, t, n) : vn(e);
}
function yc(e, t, n) {
  const i = e[t];
  return we(i) ? i : new Qp(e, t, n);
}
const nd = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, id = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
};
var d = {};
const On = [];
function mi(e) {
  On.push(e);
}
function gi() {
  On.pop();
}
let _s = !1;
function D(e, ...t) {
  if (_s) return;
  _s = !0, Lt();
  const n = On.length ? On[On.length - 1].component : null, i = n && n.appContext.config.warnHandler, r = rd();
  if (i)
    vt(
      i,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var o, l;
          return (l = (o = s.toString) == null ? void 0 : o.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${cs(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...sd(r)), console.warn(...s);
  }
  $t(), _s = !1;
}
function rd() {
  let e = On[On.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function sd(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...od(n));
  }), t;
}
function od({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, r = ` at <${cs(
    e.component,
    e.type,
    i
  )}`, s = ">" + n;
  return e.props ? [r, ...ld(e.props), s] : [r + s];
}
function ld(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(..._c(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function _c(e, t, n) {
  return Q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : we(t) ? (t = _c(e, ee(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ee(t), n ? t : [`${e}=`, t]);
}
function Do(e, t) {
  d.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? D(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && D(`${t} is NaN - the duration expression might be incorrect.`));
}
const ad = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  WATCH_GETTER: 2,
  2: "WATCH_GETTER",
  WATCH_CALLBACK: 3,
  3: "WATCH_CALLBACK",
  WATCH_CLEANUP: 4,
  4: "WATCH_CLEANUP",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE"
}, Zr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update"
};
function vt(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    fn(r, t, n);
  }
}
function Ze(e, t, n, i) {
  if (Y(e)) {
    const r = vt(e, t, n, i);
    return r && qr(r) && r.catch((s) => {
      fn(s, t, n);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(Ze(e[s], t, n, i));
    return r;
  } else d.NODE_ENV !== "production" && D(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function fn(e, t, n, i = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const o = t.proxy, l = d.NODE_ENV !== "production" ? Zr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, o, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Lt(), vt(
        a,
        null,
        10,
        [e, o, l]
      ), $t();
      return;
    }
  }
  cd(e, n, r, i);
}
function cd(e, t, n, i = !0) {
  if (d.NODE_ENV !== "production") {
    const r = Zr[t];
    if (n && mi(n), D(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && gi(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ti = !1, Ps = !1;
const $e = [];
let _t = 0;
const jn = [];
let qt = null, gn = 0;
const bc = /* @__PURE__ */ Promise.resolve();
let Co = null;
const ud = 100;
function Qr(e) {
  const t = Co || bc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fd(e) {
  let t = _t + 1, n = $e.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = $e[i], s = Ci(r);
    s < e || s === e && r.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Fi(e) {
  (!$e.length || !$e.includes(
    e,
    Ti && e.allowRecurse ? _t + 1 : _t
  )) && (e.id == null ? $e.push(e) : $e.splice(fd(e.id), 0, e), Nc());
}
function Nc() {
  !Ti && !Ps && (Ps = !0, Co = bc.then(vc));
}
function pd(e) {
  const t = $e.indexOf(e);
  t > _t && $e.splice(t, 1);
}
function Di(e) {
  j(e) ? jn.push(...e) : (!qt || !qt.includes(
    e,
    e.allowRecurse ? gn + 1 : gn
  )) && jn.push(e), Nc();
}
function Rl(e, t, n = Ti ? _t + 1 : 0) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < $e.length; n++) {
    const i = $e[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid || d.NODE_ENV !== "production" && Vo(t, i))
        continue;
      $e.splice(n, 1), n--, i();
    }
  }
}
function Sr(e) {
  if (jn.length) {
    const t = [...new Set(jn)].sort(
      (n, i) => Ci(n) - Ci(i)
    );
    if (jn.length = 0, qt) {
      qt.push(...t);
      return;
    }
    for (qt = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gn = 0; gn < qt.length; gn++) {
      const n = qt[gn];
      d.NODE_ENV !== "production" && Vo(e, n) || n.active !== !1 && n();
    }
    qt = null, gn = 0;
  }
}
const Ci = (e) => e.id == null ? 1 / 0 : e.id, dd = (e, t) => {
  const n = Ci(e) - Ci(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function vc(e) {
  Ps = !1, Ti = !0, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $e.sort(dd);
  const t = d.NODE_ENV !== "production" ? (n) => Vo(e, n) : pe;
  try {
    for (_t = 0; _t < $e.length; _t++) {
      const n = $e[_t];
      if (n && n.active !== !1) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        vt(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    _t = 0, $e.length = 0, Sr(e), Ti = !1, Co = null, ($e.length || jn.length) && vc(e);
  }
}
function Vo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ud) {
      const i = t.i, r = i && Ii(i.type);
      return fn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let sn = !1;
const pr = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (Un().__VUE_HMR_RUNTIME__ = {
  createRecord: bs(Oc),
  rerender: bs(gd),
  reload: bs(Ed)
});
const Vn = /* @__PURE__ */ new Map();
function hd(e) {
  const t = e.type.__hmrId;
  let n = Vn.get(t);
  n || (Oc(t, e.type), n = Vn.get(t)), n.instances.add(e);
}
function md(e) {
  Vn.get(e.type.__hmrId).instances.delete(e);
}
function Oc(e, t) {
  return Vn.has(e) ? !1 : (Vn.set(e, {
    initialDef: wr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function wr(e) {
  return Vu(e) ? e.__vccOpts : e;
}
function gd(e, t) {
  const n = Vn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, wr(i.type).render = t), i.renderCache = [], sn = !0, i.effect.dirty = !0, i.update(), sn = !1;
  }));
}
function Ed(e, t) {
  const n = Vn.get(e);
  if (!n) return;
  t = wr(t), Pl(n.initialDef, t);
  const i = [...n.instances];
  for (let r = 0; r < i.length; r++) {
    const s = i[r], o = wr(s.type);
    let l = pr.get(o);
    l || (o !== n.initialDef && Pl(o, t), pr.set(o, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? (s.parent.effect.dirty = !0, Fi(() => {
      s.parent.update(), l.delete(s);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Di(() => {
    pr.clear();
  });
}
function Pl(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function bs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ft, fi = [], Ms = !1;
function Hi(e, ...t) {
  ft ? ft.emit(e, ...t) : Ms || fi.push({ event: e, args: t });
}
function xo(e, t) {
  var n, i;
  ft = e, ft ? (ft.enabled = !0, fi.forEach(({ event: r, args: s }) => ft.emit(r, ...s)), fi = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    xo(s, t);
  }), setTimeout(() => {
    ft || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ms = !0, fi = []);
  }, 3e3)) : (Ms = !0, fi = []);
}
function yd(e, t) {
  Hi("app:init", e, t, {
    Fragment: De,
    Text: At,
    Comment: _e,
    Static: on
  });
}
function _d(e) {
  Hi("app:unmount", e);
}
const Ls = /* @__PURE__ */ ko(
  "component:added"
  /* COMPONENT_ADDED */
), Sc = /* @__PURE__ */ ko(
  "component:updated"
  /* COMPONENT_UPDATED */
), bd = /* @__PURE__ */ ko(
  "component:removed"
  /* COMPONENT_REMOVED */
), Nd = (e) => {
  ft && typeof ft.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ft.cleanupBuffer(e) && bd(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ko(e) {
  return (t) => {
    Hi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const vd = /* @__PURE__ */ wc(
  "perf:start"
  /* PERFORMANCE_START */
), Od = /* @__PURE__ */ wc(
  "perf:end"
  /* PERFORMANCE_END */
);
function wc(e) {
  return (t, n, i) => {
    Hi(e, t.appContext.app, t.uid, t, n, i);
  };
}
function Sd(e, t, n) {
  Hi(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let be = null, es = null;
function Vi(e) {
  const t = be;
  return be = e, es = e && e.type.__scopeId || null, t;
}
function wd(e) {
  es = e;
}
function Td() {
  es = null;
}
const Dd = (e) => Io;
function Io(e, t = be, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && zs(-1);
    const s = Vi(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Vi(s), i._d && zs(1);
    }
    return (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Sc(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Tc(e) {
  Ba(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function Cd(e, t) {
  if (be === null)
    return d.NODE_ENV !== "production" && D("withDirectives can only be used inside render functions."), e;
  const n = Ki(be), i = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, o, l, a = oe] = t[r];
    s && (Y(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Zt(o), i.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Et(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[i];
    a && (Lt(), Ze(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), $t());
  }
}
const zt = Symbol("_leaveCb"), tr = Symbol("_enterCb");
function Ao() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ui(() => {
    e.isMounted = !0;
  }), rs(() => {
    e.isUnmounting = !0;
  }), e;
}
const rt = [Function, Array], Ro = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rt,
  onEnter: rt,
  onAfterEnter: rt,
  onEnterCancelled: rt,
  // leave
  onBeforeLeave: rt,
  onLeave: rt,
  onAfterLeave: rt,
  onLeaveCancelled: rt,
  // appear
  onBeforeAppear: rt,
  onAppear: rt,
  onAfterAppear: rt,
  onAppearCancelled: rt
}, Dc = (e) => {
  const t = e.subTree;
  return t.component ? Dc(t.component) : t;
}, Vd = {
  name: "BaseTransition",
  props: Ro,
  setup(e, { slots: t }) {
    const n = Tt(), i = Ao();
    return () => {
      const r = t.default && ts(t.default(), !0);
      if (!r || !r.length)
        return;
      let s = r[0];
      if (r.length > 1) {
        let h = !1;
        for (const g of r)
          if (g.type !== _e) {
            if (d.NODE_ENV !== "production" && h) {
              D(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = g, h = !0, d.NODE_ENV === "production") break;
          }
      }
      const o = ee(e), { mode: l } = o;
      if (d.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && D(`invalid <transition> mode: ${l}`), i.isLeaving)
        return Ns(s);
      const a = Ml(s);
      if (!a)
        return Ns(s);
      let c = zn(
        a,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      cn(a, c);
      const f = n.subTree, u = f && Ml(f);
      if (u && u.type !== _e && !pt(a, u) && Dc(n).type !== _e) {
        const h = zn(
          u,
          o,
          i,
          n
        );
        if (cn(u, h), l === "out-in" && a.type !== _e)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Ns(s);
        l === "in-out" && a.type !== _e && (h.delayLeave = (g, y, S) => {
          const L = Vc(
            i,
            u
          );
          L[String(u.key)] = u, g[zt] = () => {
            y(), g[zt] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = S;
        });
      }
      return s;
    };
  }
}, Cc = Vd;
function Vc(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function zn(e, t, n, i, r) {
  const {
    appear: s,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: h,
    onLeave: g,
    onAfterLeave: y,
    onLeaveCancelled: S,
    onBeforeAppear: L,
    onAppear: A,
    onAfterAppear: v,
    onAppearCancelled: E
  } = t, _ = String(e.key), N = Vc(n, e), V = (b, T) => {
    b && Ze(
      b,
      i,
      9,
      T
    );
  }, C = (b, T) => {
    const M = T[1];
    V(b, T), j(b) ? b.every((w) => w.length <= 1) && M() : b.length <= 1 && M();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(b) {
      let T = a;
      if (!n.isMounted)
        if (s)
          T = L || a;
        else
          return;
      b[zt] && b[zt](
        !0
        /* cancelled */
      );
      const M = N[_];
      M && pt(e, M) && M.el[zt] && M.el[zt](), V(T, [b]);
    },
    enter(b) {
      let T = c, M = f, w = u;
      if (!n.isMounted)
        if (s)
          T = A || c, M = v || f, w = E || u;
        else
          return;
      let H = !1;
      const J = b[tr] = (X) => {
        H || (H = !0, X ? V(w, [b]) : V(M, [b]), k.delayedLeave && k.delayedLeave(), b[tr] = void 0);
      };
      T ? C(T, [b, J]) : J();
    },
    leave(b, T) {
      const M = String(e.key);
      if (b[tr] && b[tr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      V(h, [b]);
      let w = !1;
      const H = b[zt] = (J) => {
        w || (w = !0, T(), J ? V(S, [b]) : V(y, [b]), b[zt] = void 0, N[M] === e && delete N[M]);
      };
      N[M] = e, g ? C(g, [b, H]) : H();
    },
    clone(b) {
      const T = zn(
        b,
        t,
        n,
        i,
        r
      );
      return r && r(T), T;
    }
  };
  return k;
}
function Ns(e) {
  if (ri(e))
    return e = ct(e), e.children = null, e;
}
function Ml(e) {
  if (!ri(e))
    return e;
  if (d.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Y(n.default))
      return n.default();
  }
}
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? cn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ts(e, t = !1, n) {
  let i = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === De ? (o.patchFlag & 128 && r++, i = i.concat(
      ts(o.children, t, l)
    )) : (t || o.type !== _e) && i.push(l != null ? ct(o, { key: l }) : o);
  }
  if (r > 1)
    for (let s = 0; s < i.length; s++)
      i[s].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Po(e, t) {
  return Y(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
const Sn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xd(e) {
  Y(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: r = 200,
    timeout: s,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let a = null, c, f = 0;
  const u = () => (f++, a = null, h()), h = () => {
    let g;
    return a || (g = a = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), l)
        return new Promise((S, L) => {
          l(y, () => S(u()), () => L(y), f + 1);
        });
      throw y;
    }).then((y) => {
      if (g !== a && a)
        return a;
      if (d.NODE_ENV !== "production" && !y && D(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), d.NODE_ENV !== "production" && y && !le(y) && !Y(y))
        throw new Error(`Invalid async component load result: ${y}`);
      return c = y, y;
    }));
  };
  return /* @__PURE__ */ Po({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = ve;
      if (c)
        return () => vs(c, g);
      const y = (v) => {
        a = null, fn(
          v,
          g,
          13,
          !i
        );
      };
      if (o && g.suspense || ji)
        return h().then((v) => () => vs(v, g)).catch((v) => (y(v), () => i ? Ee(i, {
          error: v
        }) : null));
      const S = vn(!1), L = vn(), A = vn(!!r);
      return r && setTimeout(() => {
        A.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!S.value && !L.value) {
          const v = new Error(
            `Async component timed out after ${s}ms.`
          );
          y(v), L.value = v;
        }
      }, s), h().then(() => {
        S.value = !0, g.parent && ri(g.parent.vnode) && (g.parent.effect.dirty = !0, Fi(g.parent.update));
      }).catch((v) => {
        y(v), L.value = v;
      }), () => {
        if (S.value && c)
          return vs(c, g);
        if (L.value && i)
          return Ee(i, {
            error: L.value
          });
        if (n && !A.value)
          return Ee(n);
      };
    }
  });
}
function vs(e, t) {
  const { ref: n, props: i, children: r, ce: s } = t.vnode, o = Ee(e, i, r);
  return o.ref = n, o.ce = s, delete t.vnode.ce, o;
}
const ri = (e) => e.type.__isKeepAlive, kd = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = Tt(), i = n.ctx;
    if (!i.renderer)
      return () => {
        const v = t.default && t.default();
        return v && v.length === 1 ? v[0] : v;
      };
    const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
    let o = null;
    (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (n.__v_cache = r);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: f,
        o: { createElement: u }
      }
    } = i, h = u("div");
    i.activate = (v, E, _, N, V) => {
      const C = v.component;
      c(v, E, _, 0, l), a(
        C.vnode,
        v,
        E,
        _,
        C,
        l,
        N,
        v.slotScopeIds,
        V
      ), ke(() => {
        C.isDeactivated = !1, C.a && Jt(C.a);
        const k = v.props && v.props.onVnodeMounted;
        k && Ge(k, C.parent, v);
      }, l), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Ls(C);
    }, i.deactivate = (v) => {
      const E = v.component;
      xr(E.m), xr(E.a), c(v, h, null, 1, l), ke(() => {
        E.da && Jt(E.da);
        const _ = v.props && v.props.onVnodeUnmounted;
        _ && Ge(_, E.parent, v), E.isDeactivated = !0;
      }, l), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Ls(E);
    };
    function g(v) {
      Os(v), f(v, n, l, !0);
    }
    function y(v) {
      r.forEach((E, _) => {
        const N = Ii(E.type);
        N && (!v || !v(N)) && S(_);
      });
    }
    function S(v) {
      const E = r.get(v);
      E && (!o || !pt(E, o)) ? g(E) : o && Os(o), r.delete(v), s.delete(v);
    }
    Cn(
      () => [e.include, e.exclude],
      ([v, E]) => {
        v && y((_) => pi(v, _)), E && y((_) => !pi(E, _));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let L = null;
    const A = () => {
      L != null && (Ws(n.subTree.type) ? ke(() => {
        r.set(L, nr(n.subTree));
      }, n.subTree.suspense) : r.set(L, nr(n.subTree)));
    };
    return Ui(A), is(A), rs(() => {
      r.forEach((v) => {
        const { subTree: E, suspense: _ } = n, N = nr(E);
        if (v.type === N.type && v.key === N.key) {
          Os(N);
          const V = N.component.da;
          V && ke(V, _);
          return;
        }
        g(v);
      });
    }), () => {
      if (L = null, !t.default)
        return null;
      const v = t.default(), E = v[0];
      if (v.length > 1)
        return d.NODE_ENV !== "production" && D("KeepAlive should contain exactly one component child."), o = null, v;
      if (!Mt(E) || !(E.shapeFlag & 4) && !(E.shapeFlag & 128))
        return o = null, E;
      let _ = nr(E);
      if (_.type === _e)
        return o = null, _;
      const N = _.type, V = Ii(
        Sn(_) ? _.type.__asyncResolved || {} : N
      ), { include: C, exclude: k, max: b } = e;
      if (C && (!V || !pi(C, V)) || k && V && pi(k, V))
        return o = _, E;
      const T = _.key == null ? N : _.key, M = r.get(T);
      return _.el && (_ = ct(_), E.shapeFlag & 128 && (E.ssContent = _)), L = T, M ? (_.el = M.el, _.component = M.component, _.transition && cn(_, _.transition), _.shapeFlag |= 512, s.delete(T), s.add(T)) : (s.add(T), b && s.size > parseInt(b, 10) && S(s.values().next().value)), _.shapeFlag |= 256, o = _, Ws(E.type) ? E : _;
    };
  }
}, Id = kd;
function pi(e, t) {
  return j(e) ? e.some((n) => pi(n, t)) : Q(e) ? e.split(",").includes(t) : Zf(e) ? e.test(t) : !1;
}
function xc(e, t) {
  Ic(e, "a", t);
}
function kc(e, t) {
  Ic(e, "da", t);
}
function Ic(e, t, n = ve) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ns(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ri(r.parent.vnode) && Ad(i, t, n, r), r = r.parent;
  }
}
function Ad(e, t, n, i) {
  const r = ns(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ss(() => {
    ho(i[t], r);
  }, n);
}
function Os(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function nr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ns(e, t, n = ve, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Lt();
      const l = kn(n), a = Ze(t, n, e, o);
      return l(), $t(), a;
    });
    return i ? r.unshift(s) : r.push(s), s;
  } else if (d.NODE_ENV !== "production") {
    const r = yt(Zr[e].replace(/ hook$/, ""));
    D(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ft = (e) => (t, n = ve) => {
  (!ji || e === "sp") && ns(e, (...i) => t(...i), n);
}, Mo = Ft("bm"), Ui = Ft("m"), Ac = Ft("bu"), is = Ft("u"), rs = Ft("bum"), ss = Ft("um"), Rc = Ft("sp"), Pc = Ft(
  "rtg"
), Mc = Ft(
  "rtc"
);
function Lc(e, t = ve) {
  ns("ec", e, t);
}
const Tr = "components", Rd = "directives";
function Pd(e, t) {
  return $o(Tr, e, !0, t) || e;
}
const Lo = Symbol.for("v-ndc");
function Md(e) {
  return Q(e) ? $o(Tr, e, !1) || e : e || Lo;
}
function Ld(e) {
  return $o(Rd, e);
}
function $o(e, t, n = !0, i = !1) {
  const r = be || ve;
  if (r) {
    const s = r.type;
    if (e === Tr) {
      const l = Ii(
        s,
        !1
      );
      if (l && (l === t || l === ge(t) || l === Ot(ge(t))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ll(r[e] || s[e], t) || // global registration
      Ll(r.appContext[e], t)
    );
    if (!o && i)
      return s;
    if (d.NODE_ENV !== "production" && n && !o) {
      const l = e === Tr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      D(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return o;
  } else d.NODE_ENV !== "production" && D(
    `resolve${Ot(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ll(e, t) {
  return e && (e[t] || e[ge(t)] || e[Ot(ge(t))]);
}
function $d(e, t, n, i) {
  let r;
  const s = n && n[i];
  if (j(e) || Q(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, s && s[o]);
  } else if (typeof e == "number") {
    d.NODE_ENV !== "production" && !Number.isInteger(e) && D(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s && s[o]);
  } else if (le(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, l) => t(o, l, void 0, s && s[l])
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const c = o[l];
        r[l] = t(e[c], c, l, s && s[l]);
      }
    }
  else
    r = [];
  return n && (n[i] = r), r;
}
function Fd(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (j(i))
      for (let r = 0; r < i.length; r++)
        e[i[r].name] = i[r].fn;
    else i && (e[i.name] = i.key ? (...r) => {
      const s = i.fn(...r);
      return s && (s.key = i.key), s;
    } : i.fn);
  }
  return e;
}
function Hd(e, t, n = {}, i, r) {
  if (be.isCE || be.parent && Sn(be.parent) && be.parent.isCE)
    return t !== "default" && (n.name = t), Ee("slot", n, i && i());
  let s = e[t];
  d.NODE_ENV !== "production" && s && s.length > 1 && (D(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), as();
  const o = s && Fo(s(n)), l = Ko(
    De,
    {
      key: (n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && i ? "_fb" : "")
    },
    o || (i ? i() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Fo(e) {
  return e.some((t) => Mt(t) ? !(t.type === _e || t.type === De && !Fo(t.children)) : !0) ? e : null;
}
function Ud(e, t) {
  const n = {};
  if (d.NODE_ENV !== "production" && !le(e))
    return D("v-on with no argument expects an object value."), n;
  for (const i in e)
    n[t && /[A-Z]/.test(i) ? `on:${i}` : yt(i)] = e[i];
  return n;
}
const $s = (e) => e ? Su(e) ? Ki(e) : $s(e.parent) : null, wn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? dt(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? dt(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? dt(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? dt(e.refs) : e.refs,
    $parent: (e) => $s(e.parent),
    $root: (e) => $s(e.root),
    $emit: (e) => e.emit,
    $options: (e) => __VUE_OPTIONS_API__ ? Uo(e) : e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Fi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qr.bind(e.proxy)),
    $watch: (e) => __VUE_OPTIONS_API__ ? Hh.bind(e) : pe
  })
), Ho = (e) => e === "_" || e === "$", Ss = (e, t) => e !== oe && !e.__isScriptSetup && se(e, t), Ei = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: l, appContext: a } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return i[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Ss(i, t))
          return o[t] = 1, i[t];
        if (r !== oe && se(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && se(c, t)
        )
          return o[t] = 3, s[t];
        if (n !== oe && se(n, t))
          return o[t] = 4, n[t];
        (!__VUE_OPTIONS_API__ || Fs) && (o[t] = 0);
      }
    }
    const f = wn[t];
    let u, h;
    if (f)
      return t === "$attrs" ? (Me(e.attrs, "get", ""), d.NODE_ENV !== "production" && kr()) : d.NODE_ENV !== "production" && t === "$slots" && Me(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== oe && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, se(h, t)
    )
      return h[t];
    d.NODE_ENV !== "production" && be && (!Q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== oe && Ho(t[0]) && se(r, t) ? D(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === be && D(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return Ss(r, t) ? (r[t] = n, !0) : d.NODE_ENV !== "production" && r.__isScriptSetup && se(r, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== oe && se(i, t) ? (i[t] = n, !0) : se(e.props, t) ? (d.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && D(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let l;
    return !!n[o] || e !== oe && se(e, o) || Ss(t, o) || (l = s[0]) && se(l, o) || se(i, o) || se(wn, o) || se(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (Ei.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Bd = /* @__PURE__ */ ie(
  {},
  Ei,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return Ei.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !ip(t);
      return d.NODE_ENV !== "production" && !n && Ei.has(e, t) && D(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function jd(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(wn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => wn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: pe
    });
  }), t;
}
function Kd(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: pe
    });
  });
}
function Wd(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ee(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Ho(i[0])) {
        D(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: pe
      });
    }
  });
}
const Pn = (e) => D(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function qd() {
  return d.NODE_ENV !== "production" && Pn("defineProps"), null;
}
function zd() {
  return d.NODE_ENV !== "production" && Pn("defineEmits"), null;
}
function Gd(e) {
  d.NODE_ENV !== "production" && Pn("defineExpose");
}
function Yd(e) {
  d.NODE_ENV !== "production" && Pn("defineOptions");
}
function Jd() {
  return d.NODE_ENV !== "production" && Pn("defineSlots"), null;
}
function Xd() {
  d.NODE_ENV !== "production" && Pn("defineModel");
}
function Zd(e, t) {
  return d.NODE_ENV !== "production" && Pn("withDefaults"), null;
}
function Qd() {
  return $c().slots;
}
function eh() {
  return $c().attrs;
}
function $c() {
  const e = Tt();
  return d.NODE_ENV !== "production" && !e && D("useContext() called without active instance."), e.setupContext || (e.setupContext = Cu(e));
}
function xi(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function th(e, t) {
  const n = xi(e);
  for (const i in t) {
    if (i.startsWith("__skip")) continue;
    let r = n[i];
    r ? j(r) || Y(r) ? r = n[i] = { type: r, default: t[i] } : r.default = t[i] : r === null ? r = n[i] = { default: t[i] } : d.NODE_ENV !== "production" && D(`props default key "${i}" has no corresponding declaration.`), r && t[`__skip_${i}`] && (r.skipFactory = !0);
  }
  return n;
}
function nh(e, t) {
  return !e || !t ? e || t : j(e) && j(t) ? e.concat(t) : ie({}, xi(e), xi(t));
}
function ih(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) || Object.defineProperty(n, i, {
      enumerable: !0,
      get: () => e[i]
    });
  return n;
}
function rh(e) {
  const t = Tt();
  d.NODE_ENV !== "production" && !t && D(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Js(), qr(n) && (n = n.catch((i) => {
    throw kn(t), i;
  })), [n, () => kn(t)];
}
function sh() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Fs = !0;
function oh(e) {
  const t = Uo(e), n = e.proxy, i = e.ctx;
  Fs = !1, t.beforeCreate && $l(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: h,
    beforeUpdate: g,
    updated: y,
    activated: S,
    deactivated: L,
    beforeDestroy: A,
    beforeUnmount: v,
    destroyed: E,
    unmounted: _,
    render: N,
    renderTracked: V,
    renderTriggered: C,
    errorCaptured: k,
    serverPrefetch: b,
    // public API
    expose: T,
    inheritAttrs: M,
    // assets
    components: w,
    directives: H,
    filters: J
  } = t, X = d.NODE_ENV !== "production" ? sh() : null;
  if (d.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const q in z)
        X("Props", q);
  }
  if (c && lh(c, i, X), o)
    for (const z in o) {
      const q = o[z];
      Y(q) ? (d.NODE_ENV !== "production" ? Object.defineProperty(i, z, {
        value: q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[z] = q.bind(n), d.NODE_ENV !== "production" && X("Methods", z)) : d.NODE_ENV !== "production" && D(
        `Method "${z}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    d.NODE_ENV !== "production" && !Y(r) && D(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = r.call(n, n);
    if (d.NODE_ENV !== "production" && qr(z) && D(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !le(z))
      d.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = Rn(z), d.NODE_ENV !== "production")
      for (const q in z)
        X("Data", q), Ho(q[0]) || Object.defineProperty(i, q, {
          configurable: !0,
          enumerable: !0,
          get: () => z[q],
          set: pe
        });
  }
  if (Fs = !0, s)
    for (const z in s) {
      const q = s[z], de = Y(q) ? q.bind(n, n) : Y(q.get) ? q.get.bind(n, n) : pe;
      d.NODE_ENV !== "production" && de === pe && D(`Computed property "${z}" has no getter.`);
      const tt = !Y(q) && Y(q.set) ? q.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        D(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : pe, nt = xu({
        get: de,
        set: tt
      });
      Object.defineProperty(i, z, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (it) => nt.value = it
      }), d.NODE_ENV !== "production" && X("Computed", z);
    }
  if (l)
    for (const z in l)
      Fc(l[z], i, n, z);
  if (a) {
    const z = Y(a) ? a.call(n) : a;
    Reflect.ownKeys(z).forEach((q) => {
      Uc(q, z[q]);
    });
  }
  f && $l(f, e, "c");
  function W(z, q) {
    j(q) ? q.forEach((de) => z(de.bind(n))) : q && z(q.bind(n));
  }
  if (W(Mo, u), W(Ui, h), W(Ac, g), W(is, y), W(xc, S), W(kc, L), W(Lc, k), W(Mc, V), W(Pc, C), W(rs, v), W(ss, _), W(Rc, b), j(T))
    if (T.length) {
      const z = e.exposed || (e.exposed = {});
      T.forEach((q) => {
        Object.defineProperty(z, q, {
          get: () => n[q],
          set: (de) => n[q] = de
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === pe && (e.render = N), M != null && (e.inheritAttrs = M), w && (e.components = w), H && (e.directives = H);
}
function lh(e, t, n = pe) {
  j(e) && (e = Hs(e));
  for (const i in e) {
    const r = e[i];
    let s;
    le(r) ? "default" in r ? s = yi(
      r.from || i,
      r.default,
      !0
    ) : s = yi(r.from || i) : s = yi(r), we(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[i] = s, d.NODE_ENV !== "production" && n("Inject", i);
  }
}
function $l(e, t, n) {
  Ze(
    j(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fc(e, t, n, i) {
  const r = i.includes(".") ? uu(n, i) : () => n[i];
  if (Q(e)) {
    const s = t[e];
    Y(s) ? Cn(r, s) : d.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, s);
  } else if (Y(e))
    Cn(r, e.bind(n));
  else if (le(e))
    if (j(e))
      e.forEach((s) => Fc(s, t, n, i));
    else {
      const s = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(s) ? Cn(r, s, e) : d.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else d.NODE_ENV !== "production" && D(`Invalid watch option: "${i}"`, e);
}
function Uo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !i ? a = t : (a = {}, r.length && r.forEach(
    (c) => Dr(a, c, o, !0)
  ), Dr(a, t, o)), le(t) && s.set(t, a), a;
}
function Dr(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && Dr(e, s, n, !0), r && r.forEach(
    (o) => Dr(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      d.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ah[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ah = {
  data: Fl,
  props: Hl,
  emits: Hl,
  // objects
  methods: di,
  computed: di,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: di,
  directives: di,
  // watch
  watch: uh,
  // provide / inject
  provide: Fl,
  inject: ch
};
function Fl(e, t) {
  return t ? e ? function() {
    return ie(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ch(e, t) {
  return di(Hs(e), Hs(t));
}
function Hs(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function di(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hl(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    xi(e),
    xi(t ?? {})
  ) : t;
}
function uh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = je(e[i], t[i]);
  return n;
}
function Hc() {
  return {
    app: null,
    config: {
      isNativeTag: fr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let fh = 0;
function ph(e, t) {
  return function(i, r = null) {
    Y(i) || (i = ie({}, i)), r != null && !le(r) && (d.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), r = null);
    const s = Hc(), o = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const a = s.app = {
      _uid: fh++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: eo,
      get config() {
        return s.config;
      },
      set config(c) {
        d.NODE_ENV !== "production" && D(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...f) {
        return o.has(c) ? d.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : c && Y(c.install) ? (o.add(c), c.install(a, ...f)) : Y(c) ? (o.add(c), c(a, ...f)) : d.NODE_ENV !== "production" && D(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(c) {
        return __VUE_OPTIONS_API__ ? s.mixins.includes(c) ? d.NODE_ENV !== "production" && D(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : s.mixins.push(c) : d.NODE_ENV !== "production" && D("Mixins are only available in builds supporting Options API"), a;
      },
      component(c, f) {
        return d.NODE_ENV !== "production" && Xs(c, s.config), f ? (d.NODE_ENV !== "production" && s.components[c] && D(`Component "${c}" has already been registered in target app.`), s.components[c] = f, a) : s.components[c];
      },
      directive(c, f) {
        return d.NODE_ENV !== "production" && Tc(c), f ? (d.NODE_ENV !== "production" && s.directives[c] && D(`Directive "${c}" has already been registered in target app.`), s.directives[c] = f, a) : s.directives[c];
      },
      mount(c, f, u) {
        if (l)
          d.NODE_ENV !== "production" && D(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && c.__vue_app__ && D(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = Ee(i, r);
          return h.appContext = s, u === !0 ? u = "svg" : u === !1 && (u = void 0), d.NODE_ENV !== "production" && (s.reload = () => {
            e(
              ct(h),
              c,
              u
            );
          }), f && t ? t(h, c) : e(h, c, u), l = !0, a._container = c, c.__vue_app__ = a, (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (a._instance = h.component, yd(a, eo)), Ki(h.component);
        }
      },
      unmount() {
        l ? (e(null, a._container), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (a._instance = null, _d(a)), delete a._container.__vue_app__) : d.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(c, f) {
        return d.NODE_ENV !== "production" && c in s.provides && D(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), s.provides[c] = f, a;
      },
      runWithContext(c) {
        const f = Tn;
        Tn = a;
        try {
          return c();
        } finally {
          Tn = f;
        }
      }
    };
    return a;
  };
}
let Tn = null;
function Uc(e, t) {
  if (!ve)
    d.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = ve.provides;
    const i = ve.parent && ve.parent.provides;
    i === n && (n = ve.provides = Object.create(i)), n[e] = t;
  }
}
function yi(e, t, n = !1) {
  const i = ve || be;
  if (i || Tn) {
    const r = Tn ? Tn._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(i && i.proxy) : t;
    d.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
function dh() {
  return !!(ve || be || Tn);
}
const Bc = {}, jc = () => Object.create(Bc), Kc = (e) => Object.getPrototypeOf(e) === Bc;
function hh(e, t, n, i = !1) {
  const r = {}, s = jc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wc(e, t, r, s);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  d.NODE_ENV !== "production" && zc(t || {}, r, e), n ? e.props = i ? r : dc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function mh(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function gh(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = ee(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && mh(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let h = f[u];
        if (os(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (se(s, h))
            g !== s[h] && (s[h] = g, c = !0);
          else {
            const y = ge(h);
            r[y] = Us(
              a,
              l,
              y,
              g,
              e,
              !1
            );
          }
        else
          g !== s[h] && (s[h] = g, c = !0);
      }
    }
  } else {
    Wc(e, t, r, s) && (c = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !se(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Pe(u)) === u || !se(t, f))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[u] = Us(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (s !== l)
      for (const u in s)
        (!t || !se(t, u)) && (delete s[u], c = !0);
  }
  c && bt(e.attrs, "set", ""), d.NODE_ENV !== "production" && zc(t || {}, r, e);
}
function Wc(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (en(a))
        continue;
      const c = t[a];
      let f;
      r && se(r, f = ge(a)) ? !s || !s.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : os(e.emitsOptions, a) || (!(a in i) || c !== i[a]) && (i[a] = c, o = !0);
    }
  if (s) {
    const a = ee(n), c = l || oe;
    for (let f = 0; f < s.length; f++) {
      const u = s[f];
      n[u] = Us(
        r,
        a,
        u,
        c[u],
        e,
        !se(c, u)
      );
    }
  }
  return o;
}
function Us(e, t, n, i, r, s) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Y(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const f = kn(r);
          i = c[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        i = a;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Pe(n)) && (i = !0));
  }
  return i;
}
const Eh = /* @__PURE__ */ new WeakMap();
function qc(e, t, n = !1) {
  const i = __VUE_OPTIONS_API__ && n ? Eh : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, o = {}, l = [];
  let a = !1;
  if (__VUE_OPTIONS_API__ && !Y(e)) {
    const f = (u) => {
      a = !0;
      const [h, g] = qc(u, t, !0);
      ie(o, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a)
    return le(e) && i.set(e, Hn), Hn;
  if (j(s))
    for (let f = 0; f < s.length; f++) {
      d.NODE_ENV !== "production" && !Q(s[f]) && D("props must be strings when using array syntax.", s[f]);
      const u = ge(s[f]);
      Ul(u) && (o[u] = oe);
    }
  else if (s) {
    d.NODE_ENV !== "production" && !le(s) && D("invalid props options", s);
    for (const f in s) {
      const u = ge(f);
      if (Ul(u)) {
        const h = s[f], g = o[u] = j(h) || Y(h) ? { type: h } : ie({}, h), y = g.type;
        let S = !1, L = !0;
        if (j(y))
          for (let A = 0; A < y.length; ++A) {
            const v = y[A], E = Y(v) && v.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && (L = !1);
          }
        else
          S = Y(y) && y.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = S, g[
          1
          /* shouldCastTrue */
        ] = L, (S || se(g, "default")) && l.push(u);
      }
    }
  }
  const c = [o, l];
  return le(e) && i.set(e, c), c;
}
function Ul(e) {
  return e[0] !== "$" && !en(e) ? !0 : (d.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function yh(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function zc(e, t, n) {
  const i = ee(t), r = n.propsOptions[0];
  for (const s in r) {
    let o = r[s];
    o != null && _h(
      s,
      i[s],
      o,
      d.NODE_ENV !== "production" ? dt(i) : i,
      !se(e, s) && !se(e, Pe(s))
    );
  }
}
function _h(e, t, n, i, r) {
  const { type: s, required: o, validator: l, skipCheck: a } = n;
  if (o && r) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (s != null && s !== !0 && !a) {
      let c = !1;
      const f = j(s) ? s : [s], u = [];
      for (let h = 0; h < f.length && !c; h++) {
        const { valid: g, expectedType: y } = Nh(t, f[h]);
        u.push(y || ""), c = g;
      }
      if (!c) {
        D(vh(e, t, u));
        return;
      }
    }
    l && !l(t, i) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const bh = /* @__PURE__ */ Ie(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Nh(e, t) {
  let n;
  const i = yh(t);
  if (bh(i)) {
    const r = typeof e;
    n = r === i.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else i === "Object" ? n = le(e) : i === "Array" ? n = j(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function vh(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ot).join(" | ")}`;
  const r = n[0], s = mo(t), o = Bl(t, r), l = Bl(t, s);
  return n.length === 1 && jl(r) && !Oh(r, s) && (i += ` with value ${o}`), i += `, got ${s} `, jl(s) && (i += `with value ${l}.`), i;
}
function Bl(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function jl(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Oh(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Gc = (e) => e[0] === "_" || e === "$stable", Bo = (e) => j(e) ? e.map(We) : [We(e)], Sh = (e, t, n) => {
  if (t._n)
    return t;
  const i = Io((...r) => (d.NODE_ENV !== "production" && ve && (!n || n.root === ve.root) && D(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Bo(t(...r))), n);
  return i._c = !1, i;
}, Yc = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Gc(r)) continue;
    const s = e[r];
    if (Y(s))
      t[r] = Sh(r, s, i);
    else if (s != null) {
      d.NODE_ENV !== "production" && D(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = Bo(s);
      t[r] = () => o;
    }
  }
}, Jc = (e, t) => {
  d.NODE_ENV !== "production" && !ri(e.vnode) && D(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Bo(t);
  e.slots.default = () => n;
}, Bs = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, wh = (e, t, n) => {
  const i = e.slots = jc();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Bs(i, t, n), n && Wn(i, "_", r, !0)) : Yc(t, i);
  } else t && Jc(e, t);
}, Th = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, o = oe;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && sn ? (Bs(r, t, n), bt(e, "set", "$slots")) : n && l === 1 ? s = !1 : Bs(r, t, n) : (s = !t.$stable, Yc(t, r)), o = t;
  } else t && (Jc(e, t), o = { default: 1 });
  if (s)
    for (const l in r)
      !Gc(l) && o[l] == null && delete r[l];
};
function Cr(e, t, n, i, r = !1) {
  if (j(e)) {
    e.forEach(
      (h, g) => Cr(
        h,
        t && (j(t) ? t[g] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (Sn(i) && !r)
    return;
  const s = i.shapeFlag & 4 ? Ki(i.component) : i.el, o = r ? null : s, { i: l, r: a } = e;
  if (d.NODE_ENV !== "production" && !l) {
    D(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, f = l.refs === oe ? l.refs = {} : l.refs, u = l.setupState;
  if (c != null && c !== a && (Q(c) ? (f[c] = null, se(u, c) && (u[c] = null)) : we(c) && (c.value = null)), Y(a))
    vt(a, l, 12, [o, f]);
  else {
    const h = Q(a), g = we(a);
    if (h || g) {
      const y = () => {
        if (e.f) {
          const S = h ? se(u, a) ? u[a] : f[a] : a.value;
          r ? j(S) && ho(S, s) : j(S) ? S.includes(s) || S.push(s) : h ? (f[a] = [s], se(u, a) && (u[a] = f[a])) : (a.value = [s], e.k && (f[e.k] = a.value));
        } else h ? (f[a] = o, se(u, a) && (u[a] = o)) : g ? (a.value = o, e.k && (f[e.k] = o)) : d.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (y.id = -1, ke(y, n)) : y();
    } else d.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
  }
}
const Xc = Symbol("_vte"), Dh = (e) => e.__isTeleport, Dn = (e) => e && (e.disabled || e.disabled === ""), Kl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, js = (e, t) => {
  const n = e && e.to;
  if (Q(n))
    if (t) {
      const i = t(n);
      return d.NODE_ENV !== "production" && !i && !Dn(e) && D(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), i;
    } else
      return d.NODE_ENV !== "production" && D(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return d.NODE_ENV !== "production" && !n && !Dn(e) && D(`Invalid Teleport target: ${n}`), n;
}, Ch = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, r, s, o, l, a, c) {
    const {
      mc: f,
      pc: u,
      pbc: h,
      o: { insert: g, querySelector: y, createText: S, createComment: L }
    } = c, A = Dn(t.props);
    let { shapeFlag: v, children: E, dynamicChildren: _ } = t;
    if (d.NODE_ENV !== "production" && sn && (a = !1, _ = null), e == null) {
      const N = t.el = d.NODE_ENV !== "production" ? L("teleport start") : S(""), V = t.anchor = d.NODE_ENV !== "production" ? L("teleport end") : S("");
      g(N, n, i), g(V, n, i);
      const C = t.target = js(t.props, y), k = Qc(C, t, S, g);
      C ? o === "svg" || Kl(C) ? o = "svg" : (o === "mathml" || Wl(C)) && (o = "mathml") : d.NODE_ENV !== "production" && !A && D("Invalid Teleport target on mount:", C, `(${typeof C})`);
      const b = (T, M) => {
        v & 16 && f(
          E,
          T,
          M,
          r,
          s,
          o,
          l,
          a
        );
      };
      A ? b(n, V) : C && b(C, k);
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const N = t.anchor = e.anchor, V = t.target = e.target, C = t.targetAnchor = e.targetAnchor, k = Dn(e.props), b = k ? n : V, T = k ? N : C;
      if (o === "svg" || Kl(V) ? o = "svg" : (o === "mathml" || Wl(V)) && (o = "mathml"), _ ? (h(
        e.dynamicChildren,
        _,
        b,
        r,
        s,
        o,
        l
      ), _i(e, t, !0)) : a || u(
        e,
        t,
        b,
        T,
        r,
        s,
        o,
        l,
        !1
      ), A)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ir(
          t,
          n,
          N,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = t.target = js(
          t.props,
          y
        );
        M ? ir(
          t,
          M,
          null,
          c,
          0
        ) : d.NODE_ENV !== "production" && D(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else k && ir(
        t,
        V,
        C,
        c,
        1
      );
    }
    Zc(t);
  },
  remove(e, t, n, { um: i, o: { remove: r } }, s) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: f,
      target: u,
      props: h
    } = e;
    if (u && (r(c), r(f)), s && r(a), o & 16) {
      const g = s || !Dn(h);
      for (let y = 0; y < l.length; y++) {
        const S = l[y];
        i(
          S,
          t,
          n,
          g,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: ir,
  hydrate: Vh
};
function ir(e, t, n, { o: { insert: i }, m: r }, s = 2) {
  s === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: a, children: c, props: f } = e, u = s === 2;
  if (u && i(o, t, n), (!u || Dn(f)) && a & 16)
    for (let h = 0; h < c.length; h++)
      r(
        c[h],
        t,
        n,
        2
      );
  u && i(l, t, n);
}
function Vh(e, t, n, i, r, s, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: c, createText: f }
}, u) {
  const h = t.target = js(
    t.props,
    a
  );
  if (h) {
    const g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16)
      if (Dn(t.props))
        t.anchor = u(
          o(e),
          t,
          l(e),
          n,
          i,
          r,
          s
        ), t.targetStart = g, t.targetAnchor = g && o(g);
      else {
        t.anchor = o(e);
        let y = g;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, h._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          y = o(y);
        }
        t.targetAnchor || Qc(h, t, f, c), u(
          g && o(g),
          t,
          h,
          n,
          i,
          r,
          s
        );
      }
    Zc(t);
  }
  return t.anchor && o(t.anchor);
}
const xh = Ch;
function Zc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
function Qc(e, t, n, i) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Xc] = s, e && (i(r, e), i(s, e)), s;
}
let ql = !1;
const pn = () => {
  ql || (console.error("Hydration completed but contains mismatches."), ql = !0);
}, kh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Ih = (e) => e.namespaceURI.includes("MathML"), rr = (e) => {
  if (kh(e)) return "svg";
  if (Ih(e)) return "mathml";
}, li = (e) => e.nodeType === 8;
function Ah(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: i,
      createText: r,
      nextSibling: s,
      parentNode: o,
      remove: l,
      insert: a,
      createComment: c
    }
  } = e, f = (E, _) => {
    if (!_.hasChildNodes()) {
      (d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && D(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, E, _), Sr(), _._vnode = E;
      return;
    }
    u(_.firstChild, E, null, null, null), Sr(), _._vnode = E;
  }, u = (E, _, N, V, C, k = !1) => {
    k = k || !!_.dynamicChildren;
    const b = li(E) && E.data === "[", T = () => S(
      E,
      _,
      N,
      V,
      C,
      b
    ), { type: M, ref: w, shapeFlag: H, patchFlag: J } = _;
    let X = E.nodeType;
    _.el = E, (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (Wn(E, "__vnode", _, !0), Wn(E, "__vueParentComponent", N, !0)), J === -2 && (k = !1, _.dynamicChildren = null);
    let W = null;
    switch (M) {
      case At:
        X !== 3 ? _.children === "" ? (a(_.el = r(""), o(E), E), W = E) : W = T() : (E.data !== _.children && ((d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && D(
          "Hydration text mismatch in",
          E.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            E.data
          )}
  - expected on client: ${JSON.stringify(_.children)}`
        ), pn(), E.data = _.children), W = s(E));
        break;
      case _e:
        v(E) ? (W = s(E), A(
          _.el = E.content.firstChild,
          E,
          N
        )) : X !== 8 || b ? W = T() : W = s(E);
        break;
      case on:
        if (b && (E = s(E), X = E.nodeType), X === 1 || X === 3) {
          W = E;
          const z = !_.children.length;
          for (let q = 0; q < _.staticCount; q++)
            z && (_.children += W.nodeType === 1 ? W.outerHTML : W.data), q === _.staticCount - 1 && (_.anchor = W), W = s(W);
          return b ? s(W) : W;
        } else
          T();
        break;
      case De:
        b ? W = y(
          E,
          _,
          N,
          V,
          C,
          k
        ) : W = T();
        break;
      default:
        if (H & 1)
          (X !== 1 || _.type.toLowerCase() !== E.tagName.toLowerCase()) && !v(E) ? W = T() : W = h(
            E,
            _,
            N,
            V,
            C,
            k
          );
        else if (H & 6) {
          _.slotScopeIds = C;
          const z = o(E);
          if (b ? W = L(E) : li(E) && E.data === "teleport start" ? W = L(E, E.data, "teleport end") : W = s(E), t(
            _,
            z,
            null,
            N,
            V,
            rr(z),
            k
          ), Sn(_)) {
            let q;
            b ? (q = Ee(De), q.anchor = W ? W.previousSibling : z.lastChild) : q = E.nodeType === 3 ? qo("") : Ee("div"), q.el = E, _.component.subTree = q;
          }
        } else H & 64 ? X !== 8 ? W = T() : W = _.type.hydrate(
          E,
          _,
          N,
          V,
          C,
          k,
          e,
          g
        ) : H & 128 ? W = _.type.hydrate(
          E,
          _,
          N,
          V,
          rr(o(E)),
          C,
          k,
          e,
          u
        ) : (d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && D("Invalid HostVNode type:", M, `(${typeof M})`);
    }
    return w != null && Cr(w, null, V, _), W;
  }, h = (E, _, N, V, C, k) => {
    k = k || !!_.dynamicChildren;
    const { type: b, props: T, patchFlag: M, shapeFlag: w, dirs: H, transition: J } = _, X = b === "input" || b === "option";
    if (d.NODE_ENV !== "production" || X || M !== -1) {
      H && Et(_, null, N, "created");
      let W = !1;
      if (v(E)) {
        W = ru(V, J) && N && N.vnode.props && N.vnode.props.appear;
        const q = E.content.firstChild;
        W && J.beforeEnter(q), A(q, E, N), _.el = E = q;
      }
      if (w & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let q = g(
          E.firstChild,
          _,
          E,
          N,
          V,
          C,
          k
        ), de = !1;
        for (; q; ) {
          (d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && !de && (D(
            "Hydration children mismatch on",
            E,
            `
Server rendered element contains more child nodes than client vdom.`
          ), de = !0), pn();
          const tt = q;
          q = q.nextSibling, l(tt);
        }
      } else w & 8 && E.textContent !== _.children && ((d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && D(
        "Hydration text content mismatch on",
        E,
        `
  - rendered on server: ${E.textContent}
  - expected on client: ${_.children}`
      ), pn(), E.textContent = _.children);
      if (T) {
        if (d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ || X || !k || M & 48) {
          const q = E.tagName.includes("-");
          for (const de in T)
            (d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(H && H.some((tt) => tt.dir.created)) && Rh(E, de, T[de], _, N) && pn(), (X && (de.endsWith("value") || de === "indeterminate") || Pt(de) && !en(de) || // force hydrate v-bind with .prop modifiers
            de[0] === "." || q) && i(E, de, null, T[de], void 0, N);
        } else if (T.onClick)
          i(
            E,
            "onClick",
            null,
            T.onClick,
            void 0,
            N
          );
        else if (M & 4 && rn(T.style))
          for (const q in T.style) T.style[q];
      }
      let z;
      (z = T && T.onVnodeBeforeMount) && Ge(z, N, _), H && Et(_, null, N, "beforeMount"), ((z = T && T.onVnodeMounted) || H || W) && mu(() => {
        z && Ge(z, N, _), W && J.enter(E), H && Et(_, null, N, "mounted");
      }, V);
    }
    return E.nextSibling;
  }, g = (E, _, N, V, C, k, b) => {
    b = b || !!_.dynamicChildren;
    const T = _.children, M = T.length;
    let w = !1;
    for (let H = 0; H < M; H++) {
      const J = b ? T[H] : T[H] = We(T[H]), X = J.type === At;
      if (E) {
        if (X && !b) {
          let W = T[H + 1];
          W && (W = We(W)).type === At && (a(
            r(
              E.data.slice(J.children.length)
            ),
            N,
            s(E)
          ), E.data = J.children);
        }
        E = u(
          E,
          J,
          V,
          C,
          k,
          b
        );
      } else X && !J.children ? a(J.el = r(""), N) : ((d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && !w && (D(
        "Hydration children mismatch on",
        N,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), w = !0), pn(), n(
        null,
        J,
        N,
        null,
        V,
        C,
        rr(N),
        k
      ));
    }
    return E;
  }, y = (E, _, N, V, C, k) => {
    const { slotScopeIds: b } = _;
    b && (C = C ? C.concat(b) : b);
    const T = o(E), M = g(
      s(E),
      _,
      T,
      N,
      V,
      C,
      k
    );
    return M && li(M) && M.data === "]" ? s(_.anchor = M) : (pn(), a(_.anchor = c("]"), T, M), M);
  }, S = (E, _, N, V, C, k) => {
    if ((d.NODE_ENV !== "production" || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && D(
      `Hydration node mismatch:
- rendered on server:`,
      E,
      E.nodeType === 3 ? "(text)" : li(E) && E.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      _.type
    ), pn(), _.el = null, k) {
      const M = L(E);
      for (; ; ) {
        const w = s(E);
        if (w && w !== M)
          l(w);
        else
          break;
      }
    }
    const b = s(E), T = o(E);
    return l(E), n(
      null,
      _,
      T,
      b,
      N,
      V,
      rr(T),
      C
    ), b;
  }, L = (E, _ = "[", N = "]") => {
    let V = 0;
    for (; E; )
      if (E = s(E), E && li(E) && (E.data === _ && V++, E.data === N)) {
        if (V === 0)
          return s(E);
        V--;
      }
    return E;
  }, A = (E, _, N) => {
    const V = _.parentNode;
    V && V.replaceChild(E, _);
    let C = N;
    for (; C; )
      C.vnode.el === _ && (C.vnode.el = C.subTree.el = E), C = C.parent;
  }, v = (E) => E.nodeType === 1 && E.tagName.toLowerCase() === "template";
  return [f, u];
}
function Rh(e, t, n, i, r) {
  let s, o, l, a;
  if (t === "class")
    l = e.getAttribute("class"), a = ii(n), Ph(zl(l || ""), zl(a)) || (s = o = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = Q(n) ? n : ap(ni(n));
    const c = Gl(l), f = Gl(a);
    if (i.dirs)
      for (const { dir: u, value: h } of i.dirs)
        u.name === "show" && !h && f.set("display", "none");
    r && eu(r, i, f), Mh(c, f) || (s = o = "style");
  } else (e instanceof SVGElement && Ep(t) || e instanceof HTMLElement && (Tl(t) || gp(t))) && (Tl(t) ? (l = e.hasAttribute(t), a = Eo(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = yp(n) ? String(n) : !1), l !== a && (s = "attribute", o = t));
  if (s) {
    const c = (h) => h === !1 ? "(not rendered)" : `${o}="${h}"`, f = `Hydration ${s} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return D(f, e, u), !0;
  }
  return !1;
}
function zl(e) {
  return new Set(e.trim().split(/\s+/));
}
function Ph(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Gl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [i, r] = n.split(":");
    i = i.trim(), r = r && r.trim(), i && r && t.set(i, r);
  }
  return t;
}
function Mh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, i] of e)
    if (i !== t.get(n))
      return !1;
  return !0;
}
function eu(e, t, n) {
  const i = e.subTree;
  if (e.getCssVars && (t === i || i && i.type === De && i.children.includes(t))) {
    const r = e.getCssVars();
    for (const s in r)
      n.set(`--${s}`, String(r[s]));
  }
  t === i && e.parent && eu(e.parent, e.vnode, n);
}
let ai, Xt;
function Dt(e, t) {
  e.appContext.config.performance && Vr() && Xt.mark(`vue-${t}-${e.uid}`), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && vd(e, t, Vr() ? Xt.now() : Date.now());
}
function Ct(e, t) {
  if (e.appContext.config.performance && Vr()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    Xt.mark(i), Xt.measure(
      `<${cs(e, e.type)}> ${t}`,
      n,
      i
    ), Xt.clearMarks(n), Xt.clearMarks(i);
  }
  (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Od(e, t, Vr() ? Xt.now() : Date.now());
}
function Vr() {
  return ai !== void 0 || (typeof window < "u" && window.performance ? (ai = !0, Xt = window.performance) : ai = !1), ai;
}
function Lh() {
  const e = [];
  if (typeof __VUE_OPTIONS_API__ != "boolean" && (d.NODE_ENV !== "production" && e.push("__VUE_OPTIONS_API__"), Un().__VUE_OPTIONS_API__ = !0), typeof __VUE_PROD_DEVTOOLS__ != "boolean" && (d.NODE_ENV !== "production" && e.push("__VUE_PROD_DEVTOOLS__"), Un().__VUE_PROD_DEVTOOLS__ = !1), typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (d.NODE_ENV !== "production" && e.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Un().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ke = mu;
function tu(e) {
  return iu(e);
}
function nu(e) {
  return iu(e, Ah);
}
function iu(e, t) {
  Lh();
  const n = Un();
  n.__VUE__ = !0, (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && xo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: u,
    nextSibling: h,
    setScopeId: g = pe,
    insertStaticContent: y
  } = e, S = (p, m, O, R = null, x = null, P = null, U = void 0, $ = null, F = d.NODE_ENV !== "production" && sn ? !1 : !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !pt(p, m) && (R = Yi(p), Ht(p, x, P, !0), p = null), m.patchFlag === -2 && (F = !1, m.dynamicChildren = null);
    const { type: I, ref: K, shapeFlag: Z } = m;
    switch (I) {
      case At:
        L(p, m, O, R);
        break;
      case _e:
        A(p, m, O, R);
        break;
      case on:
        p == null ? v(m, O, R, U) : d.NODE_ENV !== "production" && E(p, m, O, U);
        break;
      case De:
        H(
          p,
          m,
          O,
          R,
          x,
          P,
          U,
          $,
          F
        );
        break;
      default:
        Z & 1 ? V(
          p,
          m,
          O,
          R,
          x,
          P,
          U,
          $,
          F
        ) : Z & 6 ? J(
          p,
          m,
          O,
          R,
          x,
          P,
          U,
          $,
          F
        ) : Z & 64 || Z & 128 ? I.process(
          p,
          m,
          O,
          R,
          x,
          P,
          U,
          $,
          F,
          Mn
        ) : d.NODE_ENV !== "production" && D("Invalid VNode type:", I, `(${typeof I})`);
    }
    K != null && x && Cr(K, p && p.ref, P, m || p, !m);
  }, L = (p, m, O, R) => {
    if (p == null)
      i(
        m.el = l(m.children),
        O,
        R
      );
    else {
      const x = m.el = p.el;
      m.children !== p.children && c(x, m.children);
    }
  }, A = (p, m, O, R) => {
    p == null ? i(
      m.el = a(m.children || ""),
      O,
      R
    ) : m.el = p.el;
  }, v = (p, m, O, R) => {
    [p.el, p.anchor] = y(
      p.children,
      m,
      O,
      R,
      p.el,
      p.anchor
    );
  }, E = (p, m, O, R) => {
    if (m.children !== p.children) {
      const x = h(p.anchor);
      N(p), [m.el, m.anchor] = y(
        m.children,
        O,
        x,
        R
      );
    } else
      m.el = p.el, m.anchor = p.anchor;
  }, _ = ({ el: p, anchor: m }, O, R) => {
    let x;
    for (; p && p !== m; )
      x = h(p), i(p, O, R), p = x;
    i(m, O, R);
  }, N = ({ el: p, anchor: m }) => {
    let O;
    for (; p && p !== m; )
      O = h(p), r(p), p = O;
    r(m);
  }, V = (p, m, O, R, x, P, U, $, F) => {
    m.type === "svg" ? U = "svg" : m.type === "math" && (U = "mathml"), p == null ? C(
      m,
      O,
      R,
      x,
      P,
      U,
      $,
      F
    ) : T(
      p,
      m,
      x,
      P,
      U,
      $,
      F
    );
  }, C = (p, m, O, R, x, P, U, $) => {
    let F, I;
    const { props: K, shapeFlag: Z, transition: G, dirs: te } = p;
    if (F = p.el = o(
      p.type,
      P,
      K && K.is,
      K
    ), Z & 8 ? f(F, p.children) : Z & 16 && b(
      p.children,
      F,
      null,
      R,
      x,
      ws(p, P),
      U,
      $
    ), te && Et(p, null, R, "created"), k(F, p, p.scopeId, U, R), K) {
      for (const he in K)
        he !== "value" && !en(he) && s(F, he, null, K[he], P, R);
      "value" in K && s(F, "value", null, K.value, P), (I = K.onVnodeBeforeMount) && Ge(I, R, p);
    }
    (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (Wn(F, "__vnode", p, !0), Wn(F, "__vueParentComponent", R, !0)), te && Et(p, null, R, "beforeMount");
    const re = ru(x, G);
    re && G.beforeEnter(F), i(F, m, O), ((I = K && K.onVnodeMounted) || re || te) && ke(() => {
      I && Ge(I, R, p), re && G.enter(F), te && Et(p, null, R, "mounted");
    }, x);
  }, k = (p, m, O, R, x) => {
    if (O && g(p, O), R)
      for (let P = 0; P < R.length; P++)
        g(p, R[P]);
    if (x) {
      let P = x.subTree;
      if (d.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && (P = ls(P.children) || P), m === P) {
        const U = x.vnode;
        k(
          p,
          U,
          U.scopeId,
          U.slotScopeIds,
          x.parent
        );
      }
    }
  }, b = (p, m, O, R, x, P, U, $, F = 0) => {
    for (let I = F; I < p.length; I++) {
      const K = p[I] = $ ? Gt(p[I]) : We(p[I]);
      S(
        null,
        K,
        m,
        O,
        R,
        x,
        P,
        U,
        $
      );
    }
  }, T = (p, m, O, R, x, P, U) => {
    const $ = m.el = p.el;
    (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && ($.__vnode = m);
    let { patchFlag: F, dynamicChildren: I, dirs: K } = m;
    F |= p.patchFlag & 16;
    const Z = p.props || oe, G = m.props || oe;
    let te;
    if (O && dn(O, !1), (te = G.onVnodeBeforeUpdate) && Ge(te, O, m, p), K && Et(m, p, O, "beforeUpdate"), O && dn(O, !0), d.NODE_ENV !== "production" && sn && (F = 0, U = !1, I = null), (Z.innerHTML && G.innerHTML == null || Z.textContent && G.textContent == null) && f($, ""), I ? (M(
      p.dynamicChildren,
      I,
      $,
      O,
      R,
      ws(m, x),
      P
    ), d.NODE_ENV !== "production" && _i(p, m)) : U || de(
      p,
      m,
      $,
      null,
      O,
      R,
      ws(m, x),
      P,
      !1
    ), F > 0) {
      if (F & 16)
        w($, Z, G, O, x);
      else if (F & 2 && Z.class !== G.class && s($, "class", null, G.class, x), F & 4 && s($, "style", Z.style, G.style, x), F & 8) {
        const re = m.dynamicProps;
        for (let he = 0; he < re.length; he++) {
          const ue = re[he], xe = Z[ue], ut = G[ue];
          (ut !== xe || ue === "value") && s($, ue, xe, ut, x, O);
        }
      }
      F & 1 && p.children !== m.children && f($, m.children);
    } else !U && I == null && w($, Z, G, O, x);
    ((te = G.onVnodeUpdated) || K) && ke(() => {
      te && Ge(te, O, m, p), K && Et(m, p, O, "updated");
    }, R);
  }, M = (p, m, O, R, x, P, U) => {
    for (let $ = 0; $ < m.length; $++) {
      const F = p[$], I = m[$], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pt(F, I) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      S(
        F,
        I,
        K,
        null,
        R,
        x,
        P,
        U,
        !0
      );
    }
  }, w = (p, m, O, R, x) => {
    if (m !== O) {
      if (m !== oe)
        for (const P in m)
          !en(P) && !(P in O) && s(
            p,
            P,
            m[P],
            null,
            x,
            R
          );
      for (const P in O) {
        if (en(P)) continue;
        const U = O[P], $ = m[P];
        U !== $ && P !== "value" && s(p, P, $, U, x, R);
      }
      "value" in O && s(p, "value", m.value, O.value, x);
    }
  }, H = (p, m, O, R, x, P, U, $, F) => {
    const I = m.el = p ? p.el : l(""), K = m.anchor = p ? p.anchor : l("");
    let { patchFlag: Z, dynamicChildren: G, slotScopeIds: te } = m;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (sn || Z & 2048) && (Z = 0, F = !1, G = null), te && ($ = $ ? $.concat(te) : te), p == null ? (i(I, O, R), i(K, O, R), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      O,
      K,
      x,
      P,
      U,
      $,
      F
    )) : Z > 0 && Z & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (M(
      p.dynamicChildren,
      G,
      O,
      x,
      P,
      U,
      $
    ), d.NODE_ENV !== "production" ? _i(p, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || x && m === x.subTree) && _i(
        p,
        m,
        !0
        /* shallow */
      )
    )) : de(
      p,
      m,
      O,
      K,
      x,
      P,
      U,
      $,
      F
    );
  }, J = (p, m, O, R, x, P, U, $, F) => {
    m.slotScopeIds = $, p == null ? m.shapeFlag & 512 ? x.ctx.activate(
      m,
      O,
      R,
      U,
      F
    ) : X(
      m,
      O,
      R,
      x,
      P,
      U,
      F
    ) : W(p, m, F);
  }, X = (p, m, O, R, x, P, U) => {
    const $ = p.component = Ou(
      p,
      R,
      x
    );
    if (d.NODE_ENV !== "production" && $.type.__hmrId && hd($), d.NODE_ENV !== "production" && (mi(p), Dt($, "mount")), ri(p) && ($.ctx.renderer = Mn), d.NODE_ENV !== "production" && Dt($, "init"), wu($, !1, U), d.NODE_ENV !== "production" && Ct($, "init"), $.asyncDep) {
      if (x && x.registerDep($, z, U), !p.el) {
        const F = $.subTree = Ee(_e);
        A(null, F, m, O);
      }
    } else
      z(
        $,
        p,
        m,
        O,
        x,
        P,
        U
      );
    d.NODE_ENV !== "production" && (gi(), Ct($, "mount"));
  }, W = (p, m, O) => {
    const R = m.component = p.component;
    if (Wh(p, m, O))
      if (R.asyncDep && !R.asyncResolved) {
        d.NODE_ENV !== "production" && mi(m), q(R, m, O), d.NODE_ENV !== "production" && gi();
        return;
      } else
        R.next = m, pd(R.update), R.effect.dirty = !0, R.update();
    else
      m.el = p.el, R.vnode = m;
  }, z = (p, m, O, R, x, P, U) => {
    const $ = () => {
      if (p.isMounted) {
        let { next: K, bu: Z, u: G, parent: te, vnode: re } = p;
        {
          const Ln = su(p);
          if (Ln) {
            K && (K.el = re.el, q(p, K, U)), Ln.asyncDep.then(() => {
              p.isUnmounted || $();
            });
            return;
          }
        }
        let he = K, ue;
        d.NODE_ENV !== "production" && mi(K || p.vnode), dn(p, !1), K ? (K.el = re.el, q(p, K, U)) : K = re, Z && Jt(Z), (ue = K.props && K.props.onVnodeBeforeUpdate) && Ge(ue, te, K, re), dn(p, !0), d.NODE_ENV !== "production" && Dt(p, "render");
        const xe = dr(p);
        d.NODE_ENV !== "production" && Ct(p, "render");
        const ut = p.subTree;
        p.subTree = xe, d.NODE_ENV !== "production" && Dt(p, "patch"), S(
          ut,
          xe,
          // parent may have changed if it's in a teleport
          u(ut.el),
          // anchor may have changed if it's in a fragment
          Yi(ut),
          p,
          x,
          P
        ), d.NODE_ENV !== "production" && Ct(p, "patch"), K.el = xe.el, he === null && jo(p, xe.el), G && ke(G, x), (ue = K.props && K.props.onVnodeUpdated) && ke(
          () => Ge(ue, te, K, re),
          x
        ), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Sc(p), d.NODE_ENV !== "production" && gi();
      } else {
        let K;
        const { el: Z, props: G } = m, { bm: te, m: re, parent: he } = p, ue = Sn(m);
        if (dn(p, !1), te && Jt(te), !ue && (K = G && G.onVnodeBeforeMount) && Ge(K, he, m), dn(p, !0), Z && Es) {
          const xe = () => {
            d.NODE_ENV !== "production" && Dt(p, "render"), p.subTree = dr(p), d.NODE_ENV !== "production" && Ct(p, "render"), d.NODE_ENV !== "production" && Dt(p, "hydrate"), Es(
              Z,
              p.subTree,
              p,
              x,
              null
            ), d.NODE_ENV !== "production" && Ct(p, "hydrate");
          };
          ue ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && xe()
          ) : xe();
        } else {
          d.NODE_ENV !== "production" && Dt(p, "render");
          const xe = p.subTree = dr(p);
          d.NODE_ENV !== "production" && Ct(p, "render"), d.NODE_ENV !== "production" && Dt(p, "patch"), S(
            null,
            xe,
            O,
            R,
            p,
            x,
            P
          ), d.NODE_ENV !== "production" && Ct(p, "patch"), m.el = xe.el;
        }
        if (re && ke(re, x), !ue && (K = G && G.onVnodeMounted)) {
          const xe = m;
          ke(
            () => Ge(K, he, xe),
            x
          );
        }
        (m.shapeFlag & 256 || he && Sn(he.vnode) && he.vnode.shapeFlag & 256) && p.a && ke(p.a, x), p.isMounted = !0, (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Ls(p), m = O = R = null;
      }
    }, F = p.effect = new qn(
      $,
      pe,
      () => Fi(I),
      p.scope
      // track it in component's effect scope
    ), I = p.update = () => {
      F.dirty && F.run();
    };
    I.i = p, I.id = p.uid, dn(p, !0), d.NODE_ENV !== "production" && (F.onTrack = p.rtc ? (K) => Jt(p.rtc, K) : void 0, F.onTrigger = p.rtg ? (K) => Jt(p.rtg, K) : void 0), I();
  }, q = (p, m, O) => {
    m.component = p;
    const R = p.vnode.props;
    p.vnode = m, p.next = null, gh(p, m.props, R, O), Th(p, m.children, O), Lt(), Rl(p), $t();
  }, de = (p, m, O, R, x, P, U, $, F = !1) => {
    const I = p && p.children, K = p ? p.shapeFlag : 0, Z = m.children, { patchFlag: G, shapeFlag: te } = m;
    if (G > 0) {
      if (G & 128) {
        nt(
          I,
          Z,
          O,
          R,
          x,
          P,
          U,
          $,
          F
        );
        return;
      } else if (G & 256) {
        tt(
          I,
          Z,
          O,
          R,
          x,
          P,
          U,
          $,
          F
        );
        return;
      }
    }
    te & 8 ? (K & 16 && si(I, x, P), Z !== I && f(O, Z)) : K & 16 ? te & 16 ? nt(
      I,
      Z,
      O,
      R,
      x,
      P,
      U,
      $,
      F
    ) : si(I, x, P, !0) : (K & 8 && f(O, ""), te & 16 && b(
      Z,
      O,
      R,
      x,
      P,
      U,
      $,
      F
    ));
  }, tt = (p, m, O, R, x, P, U, $, F) => {
    p = p || Hn, m = m || Hn;
    const I = p.length, K = m.length, Z = Math.min(I, K);
    let G;
    for (G = 0; G < Z; G++) {
      const te = m[G] = F ? Gt(m[G]) : We(m[G]);
      S(
        p[G],
        te,
        O,
        null,
        x,
        P,
        U,
        $,
        F
      );
    }
    I > K ? si(
      p,
      x,
      P,
      !0,
      !1,
      Z
    ) : b(
      m,
      O,
      R,
      x,
      P,
      U,
      $,
      F,
      Z
    );
  }, nt = (p, m, O, R, x, P, U, $, F) => {
    let I = 0;
    const K = m.length;
    let Z = p.length - 1, G = K - 1;
    for (; I <= Z && I <= G; ) {
      const te = p[I], re = m[I] = F ? Gt(m[I]) : We(m[I]);
      if (pt(te, re))
        S(
          te,
          re,
          O,
          null,
          x,
          P,
          U,
          $,
          F
        );
      else
        break;
      I++;
    }
    for (; I <= Z && I <= G; ) {
      const te = p[Z], re = m[G] = F ? Gt(m[G]) : We(m[G]);
      if (pt(te, re))
        S(
          te,
          re,
          O,
          null,
          x,
          P,
          U,
          $,
          F
        );
      else
        break;
      Z--, G--;
    }
    if (I > Z) {
      if (I <= G) {
        const te = G + 1, re = te < K ? m[te].el : R;
        for (; I <= G; )
          S(
            null,
            m[I] = F ? Gt(m[I]) : We(m[I]),
            O,
            re,
            x,
            P,
            U,
            $,
            F
          ), I++;
      }
    } else if (I > G)
      for (; I <= Z; )
        Ht(p[I], x, P, !0), I++;
    else {
      const te = I, re = I, he = /* @__PURE__ */ new Map();
      for (I = re; I <= G; I++) {
        const Be = m[I] = F ? Gt(m[I]) : We(m[I]);
        Be.key != null && (d.NODE_ENV !== "production" && he.has(Be.key) && D(
          "Duplicate keys found during update:",
          JSON.stringify(Be.key),
          "Make sure keys are unique."
        ), he.set(Be.key, I));
      }
      let ue, xe = 0;
      const ut = G - re + 1;
      let Ln = !1, bl = 0;
      const oi = new Array(ut);
      for (I = 0; I < ut; I++) oi[I] = 0;
      for (I = te; I <= Z; I++) {
        const Be = p[I];
        if (xe >= ut) {
          Ht(Be, x, P, !0);
          continue;
        }
        let gt;
        if (Be.key != null)
          gt = he.get(Be.key);
        else
          for (ue = re; ue <= G; ue++)
            if (oi[ue - re] === 0 && pt(Be, m[ue])) {
              gt = ue;
              break;
            }
        gt === void 0 ? Ht(Be, x, P, !0) : (oi[gt - re] = I + 1, gt >= bl ? bl = gt : Ln = !0, S(
          Be,
          m[gt],
          O,
          null,
          x,
          P,
          U,
          $,
          F
        ), xe++);
      }
      const Nl = Ln ? $h(oi) : Hn;
      for (ue = Nl.length - 1, I = ut - 1; I >= 0; I--) {
        const Be = re + I, gt = m[Be], vl = Be + 1 < K ? m[Be + 1].el : R;
        oi[I] === 0 ? S(
          null,
          gt,
          O,
          vl,
          x,
          P,
          U,
          $,
          F
        ) : Ln && (ue < 0 || I !== Nl[ue] ? it(gt, O, vl, 2) : ue--);
      }
    }
  }, it = (p, m, O, R, x = null) => {
    const { el: P, type: U, transition: $, children: F, shapeFlag: I } = p;
    if (I & 6) {
      it(p.component.subTree, m, O, R);
      return;
    }
    if (I & 128) {
      p.suspense.move(m, O, R);
      return;
    }
    if (I & 64) {
      U.move(p, m, O, Mn);
      return;
    }
    if (U === De) {
      i(P, m, O);
      for (let Z = 0; Z < F.length; Z++)
        it(F[Z], m, O, R);
      i(p.anchor, m, O);
      return;
    }
    if (U === on) {
      _(p, m, O);
      return;
    }
    if (R !== 2 && I & 1 && $)
      if (R === 0)
        $.beforeEnter(P), i(P, m, O), ke(() => $.enter(P), x);
      else {
        const { leave: Z, delayLeave: G, afterLeave: te } = $, re = () => i(P, m, O), he = () => {
          Z(P, () => {
            re(), te && te();
          });
        };
        G ? G(P, re, he) : he();
      }
    else
      i(P, m, O);
  }, Ht = (p, m, O, R = !1, x = !1) => {
    const {
      type: P,
      props: U,
      ref: $,
      children: F,
      dynamicChildren: I,
      shapeFlag: K,
      patchFlag: Z,
      dirs: G,
      cacheIndex: te
    } = p;
    if (Z === -2 && (x = !1), $ != null && Cr($, null, O, p, !0), te != null && (m.renderCache[te] = void 0), K & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const re = K & 1 && G, he = !Sn(p);
    let ue;
    if (he && (ue = U && U.onVnodeBeforeUnmount) && Ge(ue, m, p), K & 6)
      Gf(p.component, O, R);
    else {
      if (K & 128) {
        p.suspense.unmount(O, R);
        return;
      }
      re && Et(p, null, m, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        m,
        O,
        Mn,
        R
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== De || Z > 0 && Z & 64) ? si(
        I,
        m,
        O,
        !1,
        !0
      ) : (P === De && Z & 384 || !x && K & 16) && si(F, m, O), R && hs(p);
    }
    (he && (ue = U && U.onVnodeUnmounted) || re) && ke(() => {
      ue && Ge(ue, m, p), re && Et(p, null, m, "unmounted");
    }, O);
  }, hs = (p) => {
    const { type: m, el: O, anchor: R, transition: x } = p;
    if (m === De) {
      d.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && x && !x.persisted ? p.children.forEach((U) => {
        U.type === _e ? r(U.el) : hs(U);
      }) : zf(O, R);
      return;
    }
    if (m === on) {
      N(p);
      return;
    }
    const P = () => {
      r(O), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (p.shapeFlag & 1 && x && !x.persisted) {
      const { leave: U, delayLeave: $ } = x, F = () => U(O, P);
      $ ? $(p.el, P, F) : F();
    } else
      P();
  }, zf = (p, m) => {
    let O;
    for (; p !== m; )
      O = h(p), r(p), p = O;
    r(m);
  }, Gf = (p, m, O) => {
    d.NODE_ENV !== "production" && p.type.__hmrId && md(p);
    const { bum: R, scope: x, update: P, subTree: U, um: $, m: F, a: I } = p;
    xr(F), xr(I), R && Jt(R), x.stop(), P && (P.active = !1, Ht(U, p, m, O)), $ && ke($, m), ke(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Nd(p);
  }, si = (p, m, O, R = !1, x = !1, P = 0) => {
    for (let U = P; U < p.length; U++)
      Ht(p[U], m, O, R, x);
  }, Yi = (p) => {
    if (p.shapeFlag & 6)
      return Yi(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), O = m && m[Xc];
    return O ? h(O) : m;
  };
  let ms = !1;
  const _l = (p, m, O) => {
    p == null ? m._vnode && Ht(m._vnode, null, null, !0) : S(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      O
    ), m._vnode = p, ms || (ms = !0, Rl(), Sr(), ms = !1);
  }, Mn = {
    p: S,
    um: Ht,
    m: it,
    r: hs,
    mt: X,
    mc: b,
    pc: de,
    pbc: M,
    n: Yi,
    o: e
  };
  let gs, Es;
  return t && ([gs, Es] = t(
    Mn
  )), {
    render: _l,
    hydrate: gs,
    createApp: ph(_l, gs)
  };
}
function ws({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function dn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ru(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _i(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (j(i) && j(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Gt(r[s]), l.el = o.el), !n && l.patchFlag !== -2 && _i(o, l)), l.type === At && (l.el = o.el), d.NODE_ENV !== "production" && l.type === _e && !l.el && (l.el = o.el);
    }
}
function $h(e) {
  const t = e.slice(), n = [0];
  let i, r, s, o, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const c = e[i];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[i] = r, n.push(i);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < c ? s = l + 1 : o = l;
      c < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function su(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : su(t);
}
function xr(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const ou = Symbol.for("v-scx"), lu = () => {
  {
    const e = yi(ou);
    return e || d.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Fh(e, t) {
  return Bi(e, null, t);
}
function au(e, t) {
  return Bi(
    e,
    null,
    d.NODE_ENV !== "production" ? ie({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function cu(e, t) {
  return Bi(
    e,
    null,
    d.NODE_ENV !== "production" ? ie({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const sr = {};
function Cn(e, t, n) {
  return d.NODE_ENV !== "production" && !Y(t) && D(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Bi(e, t, n);
}
function Bi(e, t, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: l
} = oe) {
  if (t && s) {
    const C = t;
    t = (...k) => {
      C(...k), V();
    };
  }
  d.NODE_ENV !== "production" && i !== void 0 && typeof i == "number" && D(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), d.NODE_ENV !== "production" && !t && (n !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (C) => {
    D(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = ve, f = (C) => i === !0 ? C : (
    // for deep: false, only traverse root-level properties
    Zt(C, i === !1 ? 1 : void 0)
  );
  let u, h = !1, g = !1;
  if (we(e) ? (u = () => e.value, h = Nt(e)) : rn(e) ? (u = () => f(e), h = !0) : j(e) ? (g = !0, h = e.some((C) => rn(C) || Nt(C)), u = () => e.map((C) => {
    if (we(C))
      return C.value;
    if (rn(C))
      return f(C);
    if (Y(C))
      return vt(C, c, 2);
    d.NODE_ENV !== "production" && a(C);
  })) : Y(e) ? t ? u = () => vt(e, c, 2) : u = () => (y && y(), Ze(
    e,
    c,
    3,
    [S]
  )) : (u = pe, d.NODE_ENV !== "production" && a(e)), t && i) {
    const C = u;
    u = () => Zt(C());
  }
  let y, S = (C) => {
    y = _.onStop = () => {
      vt(C, c, 4), y = _.onStop = void 0;
    };
  }, L;
  if (ji)
    if (S = pe, t ? n && Ze(t, c, 3, [
      u(),
      g ? [] : void 0,
      S
    ]) : u(), r === "sync") {
      const C = lu();
      L = C.__watcherHandles || (C.__watcherHandles = []);
    } else
      return pe;
  let A = g ? new Array(e.length).fill(sr) : sr;
  const v = () => {
    if (!(!_.active || !_.dirty))
      if (t) {
        const C = _.run();
        (i || h || (g ? C.some((k, b) => Ke(k, A[b])) : Ke(C, A))) && (y && y(), Ze(t, c, 3, [
          C,
          // pass undefined as the old value when it's changed for the first time
          A === sr ? void 0 : g && A[0] === sr ? [] : A,
          S
        ]), A = C);
      } else
        _.run();
  };
  v.allowRecurse = !!t;
  let E;
  r === "sync" ? E = v : r === "post" ? E = () => ke(v, c && c.suspense) : (v.pre = !0, c && (v.id = c.uid), E = () => Fi(v));
  const _ = new qn(u, pe, E), N = Za(), V = () => {
    _.stop(), N && ho(N.effects, _);
  };
  return d.NODE_ENV !== "production" && (_.onTrack = o, _.onTrigger = l), t ? n ? v() : A = _.run() : r === "post" ? ke(
    _.run.bind(_),
    c && c.suspense
  ) : _.run(), L && L.push(V), V;
}
function Hh(e, t, n) {
  const i = this.proxy, r = Q(e) ? e.includes(".") ? uu(i, e) : () => i[e] : e.bind(i, i);
  let s;
  Y(t) ? s = t : (s = t.handler, n = t);
  const o = kn(this), l = Bi(r, s.bind(i), n);
  return o(), l;
}
function uu(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
function Zt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, we(e))
    Zt(e.value, t, n);
  else if (j(e))
    for (let i = 0; i < e.length; i++)
      Zt(e[i], t, n);
  else if (An(e) || _n(e))
    e.forEach((i) => {
      Zt(i, t, n);
    });
  else if (Ua(e)) {
    for (const i in e)
      Zt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Zt(e[i], t, n);
  }
  return e;
}
function Uh(e, t, n = oe) {
  const i = Tt();
  if (d.NODE_ENV !== "production" && !i)
    return D("useModel() called without active instance."), vn();
  if (d.NODE_ENV !== "production" && !i.propsOptions[0][t])
    return D(`useModel() called with prop "${t}" which is not declared.`), vn();
  const r = ge(t), s = Pe(t), o = fu(e, t), l = Ec((a, c) => {
    let f, u = oe, h;
    return cu(() => {
      const g = e[t];
      Ke(f, g) && (f = g, c());
    }), {
      get() {
        return a(), n.get ? n.get(f) : f;
      },
      set(g) {
        const y = n.set ? n.set(g) : g;
        if (!Ke(y, f) && !(u !== oe && Ke(g, u)))
          return;
        const S = i.vnode.props;
        S && // check if parent has passed v-model
        (t in S || r in S || s in S) && (`onUpdate:${t}` in S || `onUpdate:${r}` in S || `onUpdate:${s}` in S) || (f = g, c()), i.emit(`update:${t}`, y), Ke(g, y) && Ke(g, u) && !Ke(y, h) && c(), u = g, h = y;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? o || oe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const fu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ge(t)}Modifiers`] || e[`${Pe(t)}Modifiers`];
function Bh(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || oe;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(yt(ge(t)) in u)) && D(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${yt(ge(t))}" prop.`
        );
      else {
        const h = f[t];
        Y(h) && (h(...n) || D(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), o = s && fu(i, t.slice(7));
  if (o && (o.trim && (r = n.map((f) => Q(f) ? f.trim() : f)), o.number && (r = n.map(Nr))), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && Sd(e, t, r), d.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && i[yt(f)] && D(
      `Event "${f}" is emitted in component ${cs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = i[l = yt(t)] || // also try camelCase event handler (#2249)
  i[l = yt(ge(t))];
  !a && s && (a = i[l = yt(Pe(t))]), a && Ze(
    a,
    e,
    6,
    r
  );
  const c = i[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ze(
      c,
      e,
      6,
      r
    );
  }
}
function pu(e, t, n = !1) {
  const i = t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let o = {}, l = !1;
  if (__VUE_OPTIONS_API__ && !Y(e)) {
    const a = (c) => {
      const f = pu(c, t, !0);
      f && (l = !0, ie(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (le(e) && i.set(e, null), null) : (j(s) ? s.forEach((a) => o[a] = null) : ie(o, s), le(e) && i.set(e, o), o);
}
function os(e, t) {
  return !e || !Pt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Pe(t)) || se(e, t));
}
let Ks = !1;
function kr() {
  Ks = !0;
}
function dr(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: r,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: f,
    props: u,
    data: h,
    setupState: g,
    ctx: y,
    inheritAttrs: S
  } = e, L = Vi(e);
  let A, v;
  d.NODE_ENV !== "production" && (Ks = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = r || i, V = d.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(N, {
        get(C, k, b) {
          return D(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(C, k, b);
        }
      }) : N;
      A = We(
        c.call(
          V,
          N,
          f,
          d.NODE_ENV !== "production" ? dt(u) : u,
          g,
          h,
          y
        )
      ), v = l;
    } else {
      const N = t;
      d.NODE_ENV !== "production" && l === u && kr(), A = We(
        N.length > 1 ? N(
          d.NODE_ENV !== "production" ? dt(u) : u,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return kr(), dt(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : N(
          d.NODE_ENV !== "production" ? dt(u) : u,
          null
        )
      ), v = t.props ? l : jh(l);
    }
  } catch (N) {
    bi.length = 0, fn(N, e, 1), A = Ee(_e);
  }
  let E = A, _;
  if (d.NODE_ENV !== "production" && A.patchFlag > 0 && A.patchFlag & 2048 && ([E, _] = du(A)), v && S !== !1) {
    const N = Object.keys(v), { shapeFlag: V } = E;
    if (N.length) {
      if (V & 7)
        s && N.some(br) && (v = Kh(
          v,
          s
        )), E = ct(E, v, !1, !0);
      else if (d.NODE_ENV !== "production" && !Ks && E.type !== _e) {
        const C = Object.keys(l), k = [], b = [];
        for (let T = 0, M = C.length; T < M; T++) {
          const w = C[T];
          Pt(w) ? br(w) || k.push(w[2].toLowerCase() + w.slice(3)) : b.push(w);
        }
        b.length && D(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), k.length && D(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !Yl(E) && D(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), E = ct(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !Yl(E) && D(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), E.transition = n.transition), d.NODE_ENV !== "production" && _ ? _(E) : A = E, Vi(L), A;
}
const du = (e) => {
  const t = e.children, n = e.dynamicChildren, i = ls(t, !1);
  if (i) {
    if (d.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return du(i);
  } else return [e, void 0];
  const r = t.indexOf(i), s = n ? n.indexOf(i) : -1, o = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [We(i), o];
};
function ls(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (Mt(r)) {
      if (r.type !== _e || r.children === "v-if") {
        if (n)
          return;
        if (n = r, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ls(n.children);
      }
    } else
      return;
  }
  return n;
}
const jh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kh = (e, t) => {
  const n = {};
  for (const i in e)
    (!br(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, Yl = (e) => e.shapeFlag & 7 || e.type === _e;
function Wh(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: o, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (d.NODE_ENV !== "production" && (r || l) && sn || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Jl(i, o, c) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const h = f[u];
        if (o[h] !== i[h] && !os(c, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Jl(i, o, c) : !0 : !!o;
  return !1;
}
function Jl(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (t[s] !== e[s] && !os(n, s))
      return !0;
  }
  return !1;
}
function jo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ws = (e) => e.__isSuspense;
let qs = 0;
const qh = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, i, r, s, o, l, a, c) {
    if (e == null)
      Gh(
        t,
        n,
        i,
        r,
        s,
        o,
        l,
        a,
        c
      );
    else {
      if (s && s.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Yh(
        e,
        t,
        n,
        i,
        r,
        o,
        l,
        a,
        c
      );
    }
  },
  hydrate: Jh,
  normalize: Xh
}, zh = qh;
function ki(e, t) {
  const n = e.props && e.props[t];
  Y(n) && n();
}
function Gh(e, t, n, i, r, s, o, l, a) {
  const {
    p: c,
    o: { createElement: f }
  } = a, u = f("div"), h = e.suspense = hu(
    e,
    r,
    i,
    t,
    u,
    n,
    s,
    o,
    l,
    a
  );
  c(
    null,
    h.pendingBranch = e.ssContent,
    u,
    null,
    i,
    h,
    s,
    o
  ), h.deps > 0 ? (ki(e, "onPending"), ki(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    i,
    null,
    // fallback tree will not have suspense context
    s,
    o
  ), Kn(h, e.ssFallback)) : h.resolve(!1, !0);
}
function Yh(e, t, n, i, r, s, o, l, { p: a, um: c, o: { createElement: f } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const h = t.ssContent, g = t.ssFallback, { activeBranch: y, pendingBranch: S, isInFallback: L, isHydrating: A } = u;
  if (S)
    u.pendingBranch = h, pt(h, S) ? (a(
      S,
      h,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : L && (A || (a(
      y,
      g,
      n,
      i,
      r,
      null,
      // fallback tree will not have suspense context
      s,
      o,
      l
    ), Kn(u, g)))) : (u.pendingId = qs++, A ? (u.isHydrating = !1, u.activeBranch = S) : c(S, r, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), L ? (a(
      null,
      h,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      y,
      g,
      n,
      i,
      r,
      null,
      // fallback tree will not have suspense context
      s,
      o,
      l
    ), Kn(u, g))) : y && pt(h, y) ? (a(
      y,
      h,
      n,
      i,
      r,
      u,
      s,
      o,
      l
    ), u.resolve(!0)) : (a(
      null,
      h,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (y && pt(h, y))
    a(
      y,
      h,
      n,
      i,
      r,
      u,
      s,
      o,
      l
    ), Kn(u, h);
  else if (ki(t, "onPending"), u.pendingBranch = h, h.shapeFlag & 512 ? u.pendingId = h.component.suspenseId : u.pendingId = qs++, a(
    null,
    h,
    u.hiddenContainer,
    null,
    r,
    u,
    s,
    o,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: v, pendingId: E } = u;
    v > 0 ? setTimeout(() => {
      u.pendingId === E && u.fallback(g);
    }, v) : v === 0 && u.fallback(g);
  }
}
let Xl = !1;
function hu(e, t, n, i, r, s, o, l, a, c, f = !1) {
  d.NODE_ENV !== "production" && !Xl && (Xl = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: h,
    um: g,
    n: y,
    o: { parentNode: S, remove: L }
  } = c;
  let A;
  const v = Zh(e);
  v && t && t.pendingBranch && (A = t.pendingId, t.deps++);
  const E = e.props ? vr(e.props.timeout) : void 0;
  d.NODE_ENV !== "production" && Do(E, "Suspense timeout");
  const _ = s, N = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: i,
    hiddenContainer: r,
    deps: 0,
    pendingId: qs++,
    timeout: typeof E == "number" ? E : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, C = !1) {
      if (d.NODE_ENV !== "production") {
        if (!V && !N.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (N.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: k,
        activeBranch: b,
        pendingBranch: T,
        pendingId: M,
        effects: w,
        parentComponent: H,
        container: J
      } = N;
      let X = !1;
      N.isHydrating ? N.isHydrating = !1 : V || (X = b && T.transition && T.transition.mode === "out-in", X && (b.transition.afterLeave = () => {
        M === N.pendingId && (h(
          T,
          J,
          s === _ ? y(b) : s,
          0
        ), Di(w));
      }), b && (S(b.el) !== N.hiddenContainer && (s = y(b)), g(b, H, N, !0)), X || h(T, J, s, 0)), Kn(N, T), N.pendingBranch = null, N.isInFallback = !1;
      let W = N.parent, z = !1;
      for (; W; ) {
        if (W.pendingBranch) {
          W.effects.push(...w), z = !0;
          break;
        }
        W = W.parent;
      }
      !z && !X && Di(w), N.effects = [], v && t && t.pendingBranch && A === t.pendingId && (t.deps--, t.deps === 0 && !C && t.resolve()), ki(k, "onResolve");
    },
    fallback(V) {
      if (!N.pendingBranch)
        return;
      const { vnode: C, activeBranch: k, parentComponent: b, container: T, namespace: M } = N;
      ki(C, "onFallback");
      const w = y(k), H = () => {
        N.isInFallback && (u(
          null,
          V,
          T,
          w,
          b,
          null,
          // fallback tree will not have suspense context
          M,
          l,
          a
        ), Kn(N, V));
      }, J = V.transition && V.transition.mode === "out-in";
      J && (k.transition.afterLeave = H), N.isInFallback = !0, g(
        k,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), J || H();
    },
    move(V, C, k) {
      N.activeBranch && h(N.activeBranch, V, C, k), N.container = V;
    },
    next() {
      return N.activeBranch && y(N.activeBranch);
    },
    registerDep(V, C, k) {
      const b = !!N.pendingBranch;
      b && N.deps++;
      const T = V.vnode.el;
      V.asyncDep.catch((M) => {
        fn(M, V, 0);
      }).then((M) => {
        if (V.isUnmounted || N.isUnmounted || N.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: w } = V;
        d.NODE_ENV !== "production" && mi(w), Zs(V, M, !1), T && (w.el = T);
        const H = !T && V.subTree.el;
        C(
          V,
          w,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          S(T || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : y(V.subTree),
          N,
          o,
          k
        ), H && L(H), jo(V, w.el), d.NODE_ENV !== "production" && gi(), b && --N.deps === 0 && N.resolve();
      });
    },
    unmount(V, C) {
      N.isUnmounted = !0, N.activeBranch && g(
        N.activeBranch,
        n,
        V,
        C
      ), N.pendingBranch && g(
        N.pendingBranch,
        n,
        V,
        C
      );
    }
  };
  return N;
}
function Jh(e, t, n, i, r, s, o, l, a) {
  const c = t.suspense = hu(
    t,
    i,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    r,
    s,
    o,
    l,
    !0
  ), f = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    s,
    o
  );
  return c.deps === 0 && c.resolve(!1, !0), f;
}
function Xh(e) {
  const { shapeFlag: t, children: n } = e, i = t & 32;
  e.ssContent = Zl(
    i ? n.default : n
  ), e.ssFallback = i ? Zl(n.fallback) : Ee(_e);
}
function Zl(e) {
  let t;
  if (Y(e)) {
    const n = xn && e._c;
    n && (e._d = !1, as()), e = e(), n && (e._d = !0, t = Fe, gu());
  }
  if (j(e)) {
    const n = ls(e);
    d.NODE_ENV !== "production" && !n && e.filter((i) => i !== Lo).length > 0 && D("<Suspense> slots expect a single root node."), e = n;
  }
  return e = We(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function mu(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Di(e);
}
function Kn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, i && i.subTree === n && (i.vnode.el = r, jo(i, r));
}
function Zh(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const De = Symbol.for("v-fgt"), At = Symbol.for("v-txt"), _e = Symbol.for("v-cmt"), on = Symbol.for("v-stc"), bi = [];
let Fe = null;
function as(e = !1) {
  bi.push(Fe = e ? null : []);
}
function gu() {
  bi.pop(), Fe = bi[bi.length - 1] || null;
}
let xn = 1;
function zs(e) {
  xn += e, e < 0 && Fe && (Fe.hasOnce = !0);
}
function Eu(e) {
  return e.dynamicChildren = xn > 0 ? Fe || Hn : null, gu(), xn > 0 && Fe && Fe.push(e), e;
}
function Qh(e, t, n, i, r, s) {
  return Eu(
    Wo(
      e,
      t,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function Ko(e, t, n, i, r) {
  return Eu(
    Ee(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function Mt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = pr.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Gs;
function em(e) {
  Gs = e;
}
const tm = (...e) => _u(
  ...Gs ? Gs(e, be) : e
), yu = ({ key: e }) => e ?? null, hr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || we(e) || Y(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function Wo(e, t = null, n = null, i = 0, r = null, s = e === De ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yu(t),
    ref: t && hr(t),
    scopeId: es,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return l ? (zo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Q(n) ? 8 : 16), d.NODE_ENV !== "production" && a.key !== a.key && D("VNode created with invalid key (NaN). VNode type:", a.type), xn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Fe.push(a), a;
}
const Ee = d.NODE_ENV !== "production" ? tm : _u;
function _u(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === Lo) && (d.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = _e), Mt(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zo(l, n), xn > 0 && !s && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag = -2, l;
  }
  if (Vu(e) && (e = e.__vccOpts), t) {
    t = bu(t);
    let { class: l, style: a } = t;
    l && !Q(l) && (t.class = ii(l)), le(a) && (Si(a) && !j(a) && (a = ie({}, a)), t.style = ni(a));
  }
  const o = Q(e) ? 1 : Ws(e) ? 128 : Dh(e) ? 64 : le(e) ? 4 : Y(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && o & 4 && Si(e) && (e = ee(e), D(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Wo(
    e,
    t,
    n,
    i,
    r,
    o,
    s,
    !0
  );
}
function bu(e) {
  return e ? Si(e) || Kc(e) ? ie({}, e) : e : null;
}
function ct(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: o, children: l, transition: a } = e, c = t ? vu(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && yu(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? j(s) ? s.concat(hr(t)) : [s, hr(t)] : hr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && o === -1 && j(l) ? l.map(Nu) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && cn(
    f,
    a.clone(f)
  ), f;
}
function Nu(e) {
  const t = ct(e);
  return j(e.children) && (t.children = e.children.map(Nu)), t;
}
function qo(e = " ", t = 0) {
  return Ee(At, null, e, t);
}
function nm(e, t) {
  const n = Ee(on, null, e);
  return n.staticCount = t, n;
}
function im(e = "", t = !1) {
  return t ? (as(), Ko(_e, null, e)) : Ee(_e, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? Ee(_e) : j(e) ? Ee(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Gt(e) : Ee(At, null, String(e));
}
function Gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function zo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), zo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Kc(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [qo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = ii([t.class, i.class]));
      else if (r === "style")
        t.style = ni([t.style, i.style]);
      else if (Pt(r)) {
        const s = t[r], o = i[r];
        o && s !== o && !(j(s) && s.includes(o)) && (t[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function Ge(e, t, n, i = null) {
  Ze(e, t, 7, [
    n,
    i
  ]);
}
const rm = Hc();
let sm = 0;
function Ou(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || rm, s = {
    uid: sm++,
    vnode: e,
    type: i,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new yo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qc(i, r),
    emitsOptions: pu(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? s.ctx = jd(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Bh.bind(null, s), e.ce && e.ce(s), s;
}
let ve = null;
const Tt = () => ve || be;
let Ir, Ys;
{
  const e = Un(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  Ir = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ve = n
  ), Ys = t(
    "__VUE_SSR_SETTERS__",
    (n) => ji = n
  );
}
const kn = (e) => {
  const t = ve;
  return Ir(e), e.scope.on(), () => {
    e.scope.off(), Ir(t);
  };
}, Js = () => {
  ve && ve.scope.off(), Ir(null);
}, om = /* @__PURE__ */ Ie("slot,component");
function Xs(e, { isNativeTag: t }) {
  (om(e) || t(e)) && D(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Su(e) {
  return e.vnode.shapeFlag & 4;
}
let ji = !1;
function wu(e, t = !1, n = !1) {
  t && Ys(t);
  const { props: i, children: r } = e.vnode, s = Su(e);
  hh(e, i, s, t), wh(e, r, n);
  const o = s ? lm(e, t) : void 0;
  return t && Ys(!1), o;
}
function lm(e, t) {
  var n;
  const i = e.type;
  if (d.NODE_ENV !== "production") {
    if (i.name && Xs(i.name, e.appContext.config), i.components) {
      const s = Object.keys(i.components);
      for (let o = 0; o < s.length; o++)
        Xs(s[o], e.appContext.config);
    }
    if (i.directives) {
      const s = Object.keys(i.directives);
      for (let o = 0; o < s.length; o++)
        Tc(s[o]);
    }
    i.compilerOptions && Go() && D(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ei), d.NODE_ENV !== "production" && Kd(e);
  const { setup: r } = i;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Cu(e) : null, o = kn(e);
    Lt();
    const l = vt(
      r,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? dt(e.props) : e.props,
        s
      ]
    );
    if ($t(), o(), qr(l)) {
      if (l.then(Js, Js), t)
        return l.then((a) => {
          Zs(e, a, t);
        }).catch((a) => {
          fn(a, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = i.name) != null ? n : "Anonymous";
        D(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Zs(e, l, t);
  } else
    Du(e, t);
}
function Zs(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (d.NODE_ENV !== "production" && Mt(t) && D(
    "setup() should not return VNodes directly - return a render function instead."
  ), (d.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (e.devtoolsRawSetupState = t), e.setupState = To(t), d.NODE_ENV !== "production" && Wd(e)) : d.NODE_ENV !== "production" && t !== void 0 && D(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Du(e, n);
}
let Ni, Qs;
function Tu(e) {
  Ni = e, Qs = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Bd));
  };
}
const Go = () => !Ni;
function Du(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Ni && !i.render) {
      const r = i.template || Uo(e).template;
      if (r) {
        d.NODE_ENV !== "production" && Dt(e, "compile");
        const { isCustomElement: s, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = i, c = ie(
          ie(
            {
              isCustomElement: s,
              delimiters: l
            },
            o
          ),
          a
        );
        i.render = Ni(r, c), d.NODE_ENV !== "production" && Ct(e, "compile");
      }
    }
    e.render = i.render || pe, Qs && Qs(e);
  }
  if (__VUE_OPTIONS_API__) {
    const r = kn(e);
    Lt();
    try {
      oh(e);
    } finally {
      $t(), r();
    }
  }
  d.NODE_ENV !== "production" && !i.render && e.render === pe && !t && (!Ni && i.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : D("Component is missing template or render function: ", i));
}
const Ql = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return kr(), Me(e, "get", ""), e[t];
  },
  set() {
    return D("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return D("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function am(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Me(e, "get", "$slots"), t[n];
    }
  });
}
function Cu(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && D("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (j(n) ? i = "array" : we(n) && (i = "ref")), i !== "object" && D(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, i;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ql));
      },
      get slots() {
        return i || (i = am(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ql),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ki(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(To(hc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in wn)
        return wn[n](e);
    },
    has(t, n) {
      return n in t || n in wn;
    }
  })) : e.proxy;
}
const cm = /(?:^|[-_])(\w)/g, um = (e) => e.replace(cm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ii(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cs(e, t, n = !1) {
  let i = Ii(t);
  if (!i && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (i = r[1]);
  }
  if (!i && e && e.parent) {
    const r = (s) => {
      for (const o in s)
        if (s[o] === t)
          return o;
    };
    i = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return i ? um(i) : n ? "App" : "Anonymous";
}
function Vu(e) {
  return Y(e) && "__vccOpts" in e;
}
const xu = (e, t) => {
  const n = Wp(e, t, ji);
  if (d.NODE_ENV !== "production") {
    const i = Tt();
    i && i.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ku(e, t, n) {
  const i = arguments.length;
  return i === 2 ? le(t) && !j(t) ? Mt(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Mt(n) && (n = [n]), Ee(e, t, n));
}
function Iu() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      return le(u) ? u.__isVue ? ["div", e, "VueInstance"] : we(u) ? [
        "div",
        {},
        ["span", e, f(u)],
        "<",
        l(u.value),
        ">"
      ] : rn(u) ? [
        "div",
        {},
        ["span", e, Nt(u) ? "ShallowReactive" : "Reactive"],
        "<",
        l(u),
        `>${wt(u) ? " (readonly)" : ""}`
      ] : wt(u) ? [
        "div",
        {},
        ["span", e, Nt(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const h = [];
    u.type.props && u.props && h.push(o("props", ee(u.props))), u.setupState !== oe && h.push(o("setup", u.setupState)), u.data !== oe && h.push(o("data", ee(u.data)));
    const g = a(u, "computed");
    g && h.push(o("computed", g));
    const y = a(u, "inject");
    return y && h.push(o("injected", y)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), h;
  }
  function o(u, h) {
    return h = ie({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((g) => [
          "div",
          {},
          ["span", i, g + ": "],
          l(h[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", i, u] : le(u) ? ["object", { object: h ? ee(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const g = u.type;
    if (Y(g))
      return;
    const y = {};
    for (const S in u.ctx)
      c(g, S, h) && (y[S] = u.ctx[S]);
    return y;
  }
  function c(u, h, g) {
    const y = u[g];
    if (j(y) && y.includes(h) || le(y) && h in y || u.extends && c(u.extends, h, g) || u.mixins && u.mixins.some((S) => c(S, h, g)))
      return !0;
  }
  function f(u) {
    return Nt(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function fm(e, t, n, i) {
  const r = n[i];
  if (r && Au(r, e))
    return r;
  const s = t();
  return s.memo = e.slice(), s.cacheIndex = i, n[i] = s;
}
function Au(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (Ke(n[i], t[i]))
      return !1;
  return xn > 0 && Fe && Fe.push(e), !0;
}
const eo = "3.4.37", Ve = d.NODE_ENV !== "production" ? D : pe, pm = Zr, dm = (d.NODE_ENV, ft), hm = (d.NODE_ENV, xo), mm = {
  createComponentInstance: Ou,
  setupComponent: wu,
  renderComponentRoot: dr,
  setCurrentRenderingInstance: Vi,
  isVNode: Mt,
  normalizeVNode: We,
  getComponentPublicInstance: Ki,
  ensureValidVNode: Fo
}, gm = mm, Em = null, ym = null, _m = null;
var Se = {};
const bm = "http://www.w3.org/2000/svg", Nm = "http://www.w3.org/1998/Math/MathML", kt = typeof document < "u" ? document : null, ea = kt && /* @__PURE__ */ kt.createElement("template"), vm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? kt.createElementNS(bm, e) : t === "mathml" ? kt.createElementNS(Nm, e) : n ? kt.createElement(e, { is: n }) : kt.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => kt.createTextNode(e),
  createComment: (e) => kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, r, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ea.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const l = ea.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, jt = "transition", ci = "animation", Gn = Symbol("_vtc"), Yo = (e, { slots: t }) => ku(Cc, Pu(e), t);
Yo.displayName = "Transition";
const Ru = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Om = Yo.props = /* @__PURE__ */ ie(
  {},
  Ro,
  Ru
), hn = (e, t = []) => {
  j(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ta = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Pu(e) {
  const t = {};
  for (const w in e)
    w in Ru || (t[w] = e[w]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: c = o,
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, y = Sm(r), S = y && y[0], L = y && y[1], {
    onBeforeEnter: A,
    onEnter: v,
    onEnterCancelled: E,
    onLeave: _,
    onLeaveCancelled: N,
    onBeforeAppear: V = A,
    onAppear: C = v,
    onAppearCancelled: k = E
  } = t, b = (w, H, J) => {
    Wt(w, H ? f : l), Wt(w, H ? c : o), J && J();
  }, T = (w, H) => {
    w._isLeaving = !1, Wt(w, u), Wt(w, g), Wt(w, h), H && H();
  }, M = (w) => (H, J) => {
    const X = w ? C : v, W = () => b(H, w, J);
    hn(X, [H, W]), na(() => {
      Wt(H, w ? a : s), Vt(H, w ? f : l), ta(X) || ia(H, i, S, W);
    });
  };
  return ie(t, {
    onBeforeEnter(w) {
      hn(A, [w]), Vt(w, s), Vt(w, o);
    },
    onBeforeAppear(w) {
      hn(V, [w]), Vt(w, a), Vt(w, c);
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(w, H) {
      w._isLeaving = !0;
      const J = () => T(w, H);
      Vt(w, u), Vt(w, h), Lu(), na(() => {
        w._isLeaving && (Wt(w, u), Vt(w, g), ta(_) || ia(w, i, L, J));
      }), hn(_, [w, J]);
    },
    onEnterCancelled(w) {
      b(w, !1), hn(E, [w]);
    },
    onAppearCancelled(w) {
      b(w, !0), hn(k, [w]);
    },
    onLeaveCancelled(w) {
      T(w), hn(N, [w]);
    }
  });
}
function Sm(e) {
  if (e == null)
    return null;
  if (le(e))
    return [Ts(e.enter), Ts(e.leave)];
  {
    const t = Ts(e);
    return [t, t];
  }
}
function Ts(e) {
  const t = vr(e);
  return Se.NODE_ENV !== "production" && Do(t, "<transition> explicit duration"), t;
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Gn] || (e[Gn] = /* @__PURE__ */ new Set())).add(t);
}
function Wt(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Gn];
  n && (n.delete(t), n.size || (e[Gn] = void 0));
}
function na(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wm = 0;
function ia(e, t, n, i) {
  const r = e._endId = ++wm, s = () => {
    r === e._endId && i();
  };
  if (n)
    return setTimeout(s, n);
  const { type: o, timeout: l, propCount: a } = Mu(e, t);
  if (!o)
    return i();
  const c = o + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(c, h), s();
  }, h = (g) => {
    g.target === e && ++f >= a && u();
  };
  setTimeout(() => {
    f < a && u();
  }, l + 1), e.addEventListener(c, h);
}
function Mu(e, t) {
  const n = window.getComputedStyle(e), i = (y) => (n[y] || "").split(", "), r = i(`${jt}Delay`), s = i(`${jt}Duration`), o = ra(r, s), l = i(`${ci}Delay`), a = i(`${ci}Duration`), c = ra(l, a);
  let f = null, u = 0, h = 0;
  t === jt ? o > 0 && (f = jt, u = o, h = s.length) : t === ci ? c > 0 && (f = ci, u = c, h = a.length) : (u = Math.max(o, c), f = u > 0 ? o > c ? jt : ci : null, h = f ? f === jt ? s.length : a.length : 0);
  const g = f === jt && /\b(transform|all)(,|$)/.test(
    i(`${jt}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: h,
    hasTransform: g
  };
}
function ra(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => sa(n) + sa(e[i])));
}
function sa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lu() {
  return document.body.offsetHeight;
}
function Tm(e, t, n) {
  const i = e[Gn];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ar = Symbol("_vod"), $u = Symbol("_vsh"), Jo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ar] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ui(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ui(e, !0), i.enter(e)) : i.leave(e, () => {
      ui(e, !1);
    }) : ui(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ui(e, t);
  }
};
Se.NODE_ENV !== "production" && (Jo.name = "show");
function ui(e, t) {
  e.style.display = t ? e[Ar] : "none", e[$u] = !t;
}
function Dm() {
  Jo.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Fu = Symbol(Se.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Cm(e) {
  const t = Tt();
  if (!t) {
    Se.NODE_ENV !== "production" && Ve("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((s) => no(s, r));
  };
  Se.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const i = () => {
    const r = e(t.proxy);
    to(t.subTree, r), n(r);
  };
  Mo(() => {
    au(i);
  }), Ui(() => {
    const r = new MutationObserver(i);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), ss(() => r.disconnect());
  });
}
function to(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      to(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    no(e.el, t);
  else if (e.type === De)
    e.children.forEach((n) => to(n, t));
  else if (e.type === on) {
    let { el: n, anchor: i } = e;
    for (; n && (no(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function no(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), i += `--${r}: ${t[r]};`;
    n[Fu] = i;
  }
}
const Vm = /(^|;)\s*display\s*:/;
function xm(e, t, n) {
  const i = e.style, r = Q(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Q(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && mr(i, l, "");
        }
      else
        for (const o in t)
          n[o] == null && mr(i, o, "");
    for (const o in n)
      o === "display" && (s = !0), mr(i, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = i[Fu];
      o && (n += ";" + o), i.cssText = n, s = Vm.test(n);
    }
  } else t && e.removeAttribute("style");
  Ar in e && (e[Ar] = s ? i.display : "", e[$u] && (i.display = "none"));
}
const km = /[^\\];\s*$/, oa = /\s*!important$/;
function mr(e, t, n) {
  if (j(n))
    n.forEach((i) => mr(e, t, i));
  else if (n == null && (n = ""), Se.NODE_ENV !== "production" && km.test(n) && Ve(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Im(e, t);
    oa.test(n) ? e.setProperty(
      Pe(i),
      n.replace(oa, ""),
      "important"
    ) : e[i] = n;
  }
}
const la = ["Webkit", "Moz", "ms"], Ds = {};
function Im(e, t) {
  const n = Ds[t];
  if (n)
    return n;
  let i = ge(t);
  if (i !== "filter" && i in e)
    return Ds[t] = i;
  i = Ot(i);
  for (let r = 0; r < la.length; r++) {
    const s = la[r] + i;
    if (s in e)
      return Ds[t] = s;
  }
  return t;
}
const aa = "http://www.w3.org/1999/xlink";
function ca(e, t, n, i, r, s = mp(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(aa, t.slice(6, t.length)) : e.setAttributeNS(aa, t, n) : n == null || s && !Eo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Qe(n) ? String(n) : n
  );
}
function Am(e, t, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    if (n == null) return;
    e[t] = n;
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? "" : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Eo(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (o) {
    Se.NODE_ENV !== "production" && !s && Ve(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      o
    );
  }
  s && e.removeAttribute(t);
}
function It(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Rm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ua = Symbol("_vei");
function Pm(e, t, n, i, r = null) {
  const s = e[ua] || (e[ua] = {}), o = s[t];
  if (i && o)
    o.value = Se.NODE_ENV !== "production" ? pa(i, t) : i;
  else {
    const [l, a] = Mm(t);
    if (i) {
      const c = s[t] = Fm(
        Se.NODE_ENV !== "production" ? pa(i, t) : i,
        r
      );
      It(e, l, c, a);
    } else o && (Rm(e, l, o, a), s[t] = void 0);
  }
}
const fa = /(?:Once|Passive|Capture)$/;
function Mm(e) {
  let t;
  if (fa.test(e)) {
    t = {};
    let i;
    for (; i = e.match(fa); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pe(e.slice(2)), t];
}
let Cs = 0;
const Lm = /* @__PURE__ */ Promise.resolve(), $m = () => Cs || (Lm.then(() => Cs = 0), Cs = Date.now());
function Fm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Ze(
      Hm(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = $m(), n;
}
function pa(e, t) {
  return Y(e) || j(e) ? e : (Ve(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), pe);
}
function Hm(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (r) => !r._stopped && i && i(r)
    );
  } else
    return t;
}
const da = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Um = (e, t, n, i, r, s) => {
  const o = r === "svg";
  t === "class" ? Tm(e, i, o) : t === "style" ? xm(e, n, i) : Pt(t) ? br(t) || Pm(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bm(e, t, i, o)) ? (Am(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ca(e, t, i, o, s, t !== "value")) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ca(e, t, i, o));
};
function Bm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && da(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return da(t) && Q(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hu(e, t, n) {
  const i = /* @__PURE__ */ Po(e, t);
  class r extends us {
    constructor(o) {
      super(i, o, n);
    }
  }
  return r.def = i, r;
}
/*! #__NO_SIDE_EFFECTS__ */
const jm = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Hu(e, t, Xu), Km = typeof HTMLElement < "u" ? HTMLElement : class {
};
class us extends Km {
  constructor(t, n = {}, i) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (Se.NODE_ENV !== "production" && this.shadowRoot && Ve(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Qr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), io(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver((i) => {
      for (const r of i)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (i, r = !1) => {
      const { props: s, styles: o } = i;
      let l;
      if (s && !j(s))
        for (const a in s) {
          const c = s[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = vr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[ge(a)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, i = j(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of i.map(ge))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(s) {
          this._setProp(r, s);
        }
      });
  }
  _setAttr(t) {
    let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const i = ge(t);
    this._numberProps && this._numberProps[i] && (n = vr(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), i && (n === !0 ? this.setAttribute(Pe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Pe(t), n + "") : n || this.removeAttribute(Pe(t))));
  }
  _update() {
    io(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ee(this._def, ie({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, Se.NODE_ENV !== "production" && (n.ceReload = (s) => {
        this._styles && (this._styles.forEach((o) => this.shadowRoot.removeChild(o)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, o) => {
        this.dispatchEvent(
          new CustomEvent(s, {
            detail: o
          })
        );
      };
      n.emit = (s, ...o) => {
        i(s, o), Pe(s) !== s && i(Pe(s), o);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof us) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i), Se.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(i);
    });
  }
}
function Wm(e = "$style") {
  {
    const t = Tt();
    if (!t)
      return Se.NODE_ENV !== "production" && Ve("useCssModule must be called inside setup()"), oe;
    const n = t.type.__cssModules;
    if (!n)
      return Se.NODE_ENV !== "production" && Ve("Current instance does not have CSS modules injected."), oe;
    const i = n[e];
    return i || (Se.NODE_ENV !== "production" && Ve(`Current instance does not have CSS module named "${e}".`), oe);
  }
}
const Uu = /* @__PURE__ */ new WeakMap(), Bu = /* @__PURE__ */ new WeakMap(), Rr = Symbol("_moveCb"), ha = Symbol("_enterCb"), ju = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ie({}, Om, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Tt(), i = Ao();
    let r, s;
    return is(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Xm(
        r[0].el,
        n.vnode.el,
        o
      ))
        return;
      r.forEach(Gm), r.forEach(Ym);
      const l = r.filter(Jm);
      Lu(), l.forEach((a) => {
        const c = a.el, f = c.style;
        Vt(c, o), f.transform = f.webkitTransform = f.transitionDuration = "";
        const u = c[Rr] = (h) => {
          h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", u), c[Rr] = null, Wt(c, o));
        };
        c.addEventListener("transitionend", u);
      });
    }), () => {
      const o = ee(e), l = Pu(o);
      let a = o.tag || De;
      if (r = [], s)
        for (let c = 0; c < s.length; c++) {
          const f = s[c];
          f.el && f.el instanceof Element && (r.push(f), cn(
            f,
            zn(
              f,
              l,
              i,
              n
            )
          ), Uu.set(
            f,
            f.el.getBoundingClientRect()
          ));
        }
      s = t.default ? ts(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        f.key != null ? cn(
          f,
          zn(f, l, i, n)
        ) : Se.NODE_ENV !== "production" && Ve("<TransitionGroup> children must be keyed.");
      }
      return Ee(a, null, s);
    };
  }
}, qm = (e) => delete e.mode;
ju.props;
const zm = ju;
function Gm(e) {
  const t = e.el;
  t[Rr] && t[Rr](), t[ha] && t[ha]();
}
function Ym(e) {
  Bu.set(e, e.el.getBoundingClientRect());
}
function Jm(e) {
  const t = Uu.get(e), n = Bu.get(e), i = t.left - n.left, r = t.top - n.top;
  if (i || r) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${i}px,${r}px)`, s.transitionDuration = "0s", e;
  }
}
function Xm(e, t, n) {
  const i = e.cloneNode(), r = e[Gn];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && i.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && i.classList.add(l)), i.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(i);
  const { hasTransform: o } = Mu(i);
  return s.removeChild(i), o;
}
const un = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (n) => Jt(t, n) : t;
};
function Zm(e) {
  e.target.composing = !0;
}
function ma(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const at = Symbol("_assign"), Pr = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, r) {
    e[at] = un(r);
    const s = i || r.props && r.props.type === "number";
    It(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Nr(l)), e[at](l);
    }), n && It(e, "change", () => {
      e.value = e.value.trim();
    }), t || (It(e, "compositionstart", Zm), It(e, "compositionend", ma), It(e, "change", ma));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: r, number: s } }, o) {
    if (e[at] = un(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Nr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Xo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[at] = un(n), It(e, "change", () => {
      const i = e._modelValue, r = Yn(e), s = e.checked, o = e[at];
      if (j(i)) {
        const l = Gr(i, r), a = l !== -1;
        if (s && !a)
          o(i.concat(r));
        else if (!s && a) {
          const c = [...i];
          c.splice(l, 1), o(c);
        }
      } else if (An(i)) {
        const l = new Set(i);
        s ? l.add(r) : l.delete(r), o(l);
      } else
        o(Wu(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ga,
  beforeUpdate(e, t, n) {
    e[at] = un(n), ga(e, t, n);
  }
};
function ga(e, { value: t, oldValue: n }, i) {
  e._modelValue = t, j(t) ? e.checked = Gr(t, i.props.value) > -1 : An(t) ? e.checked = t.has(i.props.value) : t !== n && (e.checked = an(t, Wu(e, !0)));
}
const Zo = {
  created(e, { value: t }, n) {
    e.checked = an(t, n.props.value), e[at] = un(n), It(e, "change", () => {
      e[at](Yn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, i) {
    e[at] = un(i), t !== n && (e.checked = an(t, i.props.value));
  }
}, Ku = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const r = An(t);
    It(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Nr(Yn(o)) : Yn(o)
      );
      e[at](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, Qr(() => {
        e._assigning = !1;
      });
    }), e[at] = un(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Ea(e, t);
  },
  beforeUpdate(e, t, n) {
    e[at] = un(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Ea(e, t);
  }
};
function Ea(e, t, n) {
  const i = e.multiple, r = j(t);
  if (i && !r && !An(t)) {
    Se.NODE_ENV !== "production" && Ve(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, o = e.options.length; s < o; s++) {
    const l = e.options[s], a = Yn(l);
    if (i)
      if (r) {
        const c = typeof a;
        c === "string" || c === "number" ? l.selected = t.some((f) => String(f) === String(a)) : l.selected = Gr(t, a) > -1;
      } else
        l.selected = t.has(a);
    else if (an(Yn(l), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Yn(e) {
  return "_value" in e ? e._value : e.value;
}
function Wu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const qu = {
  created(e, t, n) {
    or(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    or(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    or(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    or(e, t, n, i, "updated");
  }
};
function zu(e, t) {
  switch (e) {
    case "SELECT":
      return Ku;
    case "TEXTAREA":
      return Pr;
    default:
      switch (t) {
        case "checkbox":
          return Xo;
        case "radio":
          return Zo;
        default:
          return Pr;
      }
  }
}
function or(e, t, n, i, r) {
  const o = zu(
    e.tagName,
    n.props && n.props.type
  )[r];
  o && o(e, t, n, i);
}
function Qm() {
  Pr.getSSRProps = ({ value: e }) => ({ value: e }), Zo.getSSRProps = ({ value: e }, t) => {
    if (t.props && an(t.props.value, e))
      return { checked: !0 };
  }, Xo.getSSRProps = ({ value: e }, t) => {
    if (j(e)) {
      if (t.props && Gr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (An(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, qu.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = zu(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const eg = ["ctrl", "shift", "alt", "meta"], tg = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => eg.some((n) => e[`${n}Key`] && !t.includes(n))
}, ng = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = tg[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...s);
  });
}, ig = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, rg = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = Pe(r.key);
    if (t.some((o) => o === s || ig[o] === s))
      return e(r);
  });
}, Gu = /* @__PURE__ */ ie({ patchProp: Um }, vm);
let vi, ya = !1;
function Yu() {
  return vi || (vi = tu(Gu));
}
function Ju() {
  return vi = ya ? vi : nu(Gu), ya = !0, vi;
}
const io = (...e) => {
  Yu().render(...e);
}, Xu = (...e) => {
  Ju().hydrate(...e);
}, Zu = (...e) => {
  const t = Yu().createApp(...e);
  Se.NODE_ENV !== "production" && (ef(t), tf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const r = nf(i);
    if (!r) return;
    const s = t._component;
    !Y(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, Qu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}, sg = (...e) => {
  const t = Ju().createApp(...e);
  Se.NODE_ENV !== "production" && (ef(t), tf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const r = nf(i);
    if (r)
      return n(r, !0, Qu(r));
  }, t;
};
function Qu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ef(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ka(t) || Wa(t) || qa(t),
    writable: !1
  });
}
function tf(e) {
  if (Go()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ve(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ve(i), n;
      },
      set() {
        Ve(i);
      }
    });
  }
}
function nf(e) {
  if (Q(e)) {
    const t = document.querySelector(e);
    return Se.NODE_ENV !== "production" && !t && Ve(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Se.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ve(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let _a = !1;
const og = () => {
  _a || (_a = !0, Qm(), Dm());
}, lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Cc,
  BaseTransitionPropsValidators: Ro,
  Comment: _e,
  DeprecationTypes: _m,
  EffectScope: yo,
  ErrorCodes: ad,
  ErrorTypeStrings: pm,
  Fragment: De,
  KeepAlive: Id,
  ReactiveEffect: qn,
  Static: on,
  Suspense: zh,
  Teleport: xh,
  Text: At,
  TrackOpTypes: nd,
  Transition: Yo,
  TransitionGroup: zm,
  TriggerOpTypes: id,
  VueElement: us,
  assertNumber: Do,
  callWithAsyncErrorHandling: Ze,
  callWithErrorHandling: vt,
  camelize: ge,
  capitalize: Ot,
  cloneVNode: ct,
  compatUtils: ym,
  computed: xu,
  createApp: Zu,
  createBlock: Ko,
  createCommentVNode: im,
  createElementBlock: Qh,
  createElementVNode: Wo,
  createHydrationRenderer: nu,
  createPropsRestProxy: ih,
  createRenderer: tu,
  createSSRApp: sg,
  createSlots: Fd,
  createStaticVNode: nm,
  createTextVNode: qo,
  createVNode: Ee,
  customRef: Ec,
  defineAsyncComponent: xd,
  defineComponent: Po,
  defineCustomElement: Hu,
  defineEmits: zd,
  defineExpose: Gd,
  defineModel: Xd,
  defineOptions: Yd,
  defineProps: qd,
  defineSSRCustomElement: jm,
  defineSlots: Jd,
  devtools: dm,
  effect: Op,
  effectScope: bp,
  getCurrentInstance: Tt,
  getCurrentScope: Za,
  getTransitionRawChildren: ts,
  guardReactiveProps: bu,
  h: ku,
  handleError: fn,
  hasInjectionContext: dh,
  hydrate: Xu,
  initCustomFormatter: Iu,
  initDirectivesForSSR: og,
  inject: yi,
  isMemoSame: Au,
  isProxy: Si,
  isReactive: rn,
  isReadonly: wt,
  isRef: we,
  isRuntimeOnly: Go,
  isShallow: Nt,
  isVNode: Mt,
  markRaw: hc,
  mergeDefaults: th,
  mergeModels: nh,
  mergeProps: vu,
  nextTick: Qr,
  normalizeClass: ii,
  normalizeProps: cp,
  normalizeStyle: ni,
  onActivated: xc,
  onBeforeMount: Mo,
  onBeforeUnmount: rs,
  onBeforeUpdate: Ac,
  onDeactivated: kc,
  onErrorCaptured: Lc,
  onMounted: Ui,
  onRenderTracked: Mc,
  onRenderTriggered: Pc,
  onScopeDispose: Np,
  onServerPrefetch: Rc,
  onUnmounted: ss,
  onUpdated: is,
  openBlock: as,
  popScopeId: Td,
  provide: Uc,
  proxyRefs: To,
  pushScopeId: wd,
  queuePostFlushCb: Di,
  reactive: Rn,
  readonly: vo,
  ref: vn,
  registerRuntimeCompiler: Tu,
  render: io,
  renderList: $d,
  renderSlot: Hd,
  resolveComponent: Pd,
  resolveDirective: Ld,
  resolveDynamicComponent: Md,
  resolveFilter: Em,
  resolveTransitionHooks: zn,
  setBlockTracking: zs,
  setDevtoolsHook: hm,
  setTransitionHooks: cn,
  shallowReactive: dc,
  shallowReadonly: dt,
  shallowRef: qp,
  ssrContextKey: ou,
  ssrUtils: gm,
  stop: Sp,
  toDisplayString: Ya,
  toHandlerKey: yt,
  toHandlers: Ud,
  toRaw: ee,
  toRef: td,
  toRefs: Zp,
  toValue: Yp,
  transformVNodeArgs: em,
  triggerRef: Gp,
  unref: wo,
  useAttrs: eh,
  useCssModule: Wm,
  useCssVars: Cm,
  useModel: Uh,
  useSSRContext: lu,
  useSlots: Qd,
  useTransitionState: Ao,
  vModelCheckbox: Xo,
  vModelDynamic: qu,
  vModelRadio: Zo,
  vModelSelect: Ku,
  vModelText: Pr,
  vShow: Jo,
  version: eo,
  warn: Ve,
  watch: Cn,
  watchEffect: Fh,
  watchPostEffect: au,
  watchSyncEffect: cu,
  withAsyncContext: rh,
  withCtx: Io,
  withDefaults: Zd,
  withDirectives: Cd,
  withKeys: rg,
  withMemo: fm,
  withModifiers: ng,
  withScopeId: Dd
}, Symbol.toStringTag, { value: "Module" }));
var B = {};
const Ai = Symbol(B.NODE_ENV !== "production" ? "Fragment" : ""), Oi = Symbol(B.NODE_ENV !== "production" ? "Teleport" : ""), Qo = Symbol(B.NODE_ENV !== "production" ? "Suspense" : ""), Mr = Symbol(B.NODE_ENV !== "production" ? "KeepAlive" : ""), rf = Symbol(B.NODE_ENV !== "production" ? "BaseTransition" : ""), In = Symbol(B.NODE_ENV !== "production" ? "openBlock" : ""), sf = Symbol(B.NODE_ENV !== "production" ? "createBlock" : ""), of = Symbol(B.NODE_ENV !== "production" ? "createElementBlock" : ""), el = Symbol(B.NODE_ENV !== "production" ? "createVNode" : ""), tl = Symbol(B.NODE_ENV !== "production" ? "createElementVNode" : ""), Wi = Symbol(B.NODE_ENV !== "production" ? "createCommentVNode" : ""), nl = Symbol(B.NODE_ENV !== "production" ? "createTextVNode" : ""), lf = Symbol(B.NODE_ENV !== "production" ? "createStaticVNode" : ""), il = Symbol(B.NODE_ENV !== "production" ? "resolveComponent" : ""), rl = Symbol(
  B.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), sl = Symbol(B.NODE_ENV !== "production" ? "resolveDirective" : ""), ol = Symbol(B.NODE_ENV !== "production" ? "resolveFilter" : ""), ll = Symbol(B.NODE_ENV !== "production" ? "withDirectives" : ""), al = Symbol(B.NODE_ENV !== "production" ? "renderList" : ""), af = Symbol(B.NODE_ENV !== "production" ? "renderSlot" : ""), cf = Symbol(B.NODE_ENV !== "production" ? "createSlots" : ""), fs = Symbol(B.NODE_ENV !== "production" ? "toDisplayString" : ""), Lr = Symbol(B.NODE_ENV !== "production" ? "mergeProps" : ""), cl = Symbol(B.NODE_ENV !== "production" ? "normalizeClass" : ""), ul = Symbol(B.NODE_ENV !== "production" ? "normalizeStyle" : ""), Ri = Symbol(B.NODE_ENV !== "production" ? "normalizeProps" : ""), qi = Symbol(B.NODE_ENV !== "production" ? "guardReactiveProps" : ""), fl = Symbol(B.NODE_ENV !== "production" ? "toHandlers" : ""), ro = Symbol(B.NODE_ENV !== "production" ? "camelize" : ""), ag = Symbol(B.NODE_ENV !== "production" ? "capitalize" : ""), so = Symbol(B.NODE_ENV !== "production" ? "toHandlerKey" : ""), $r = Symbol(B.NODE_ENV !== "production" ? "setBlockTracking" : ""), cg = Symbol(B.NODE_ENV !== "production" ? "pushScopeId" : ""), ug = Symbol(B.NODE_ENV !== "production" ? "popScopeId" : ""), pl = Symbol(B.NODE_ENV !== "production" ? "withCtx" : ""), fg = Symbol(B.NODE_ENV !== "production" ? "unref" : ""), pg = Symbol(B.NODE_ENV !== "production" ? "isRef" : ""), dl = Symbol(B.NODE_ENV !== "production" ? "withMemo" : ""), uf = Symbol(B.NODE_ENV !== "production" ? "isMemoSame" : ""), Jn = {
  [Ai]: "Fragment",
  [Oi]: "Teleport",
  [Qo]: "Suspense",
  [Mr]: "KeepAlive",
  [rf]: "BaseTransition",
  [In]: "openBlock",
  [sf]: "createBlock",
  [of]: "createElementBlock",
  [el]: "createVNode",
  [tl]: "createElementVNode",
  [Wi]: "createCommentVNode",
  [nl]: "createTextVNode",
  [lf]: "createStaticVNode",
  [il]: "resolveComponent",
  [rl]: "resolveDynamicComponent",
  [sl]: "resolveDirective",
  [ol]: "resolveFilter",
  [ll]: "withDirectives",
  [al]: "renderList",
  [af]: "renderSlot",
  [cf]: "createSlots",
  [fs]: "toDisplayString",
  [Lr]: "mergeProps",
  [cl]: "normalizeClass",
  [ul]: "normalizeStyle",
  [Ri]: "normalizeProps",
  [qi]: "guardReactiveProps",
  [fl]: "toHandlers",
  [ro]: "camelize",
  [ag]: "capitalize",
  [so]: "toHandlerKey",
  [$r]: "setBlockTracking",
  [cg]: "pushScopeId",
  [ug]: "popScopeId",
  [pl]: "withCtx",
  [fg]: "unref",
  [pg]: "isRef",
  [dl]: "withMemo",
  [uf]: "isMemoSame"
};
function dg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Jn[t] = e[t];
  });
}
const et = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function hg(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: et
  };
}
function Pi(e, t, n, i, r, s, o, l = !1, a = !1, c = !1, f = et) {
  return e && (l ? (e.helper(In), e.helper(Qn(e.inSSR, c))) : e.helper(Zn(e.inSSR, c)), o && e.helper(ll)), {
    type: 13,
    tag: t,
    props: n,
    children: i,
    patchFlag: r,
    dynamicProps: s,
    directives: o,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: f
  };
}
function zi(e, t = et) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function ot(e, t = et) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Oe(e, t) {
  return {
    type: 16,
    loc: et,
    key: Q(e) ? ne(e, !0) : e,
    value: t
  };
}
function ne(e, t = !1, n = et, i = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : i
  };
}
function mt(e, t = et) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Ce(e, t = [], n = et) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Xn(e, t = void 0, n = !1, i = !1, r = et) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: i,
    loc: r
  };
}
function oo(e, t, n, i = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: i,
    loc: et
  };
}
function mg(e, t, n = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    isVOnce: n,
    loc: et
  };
}
function gg(e) {
  return {
    type: 21,
    body: e,
    loc: et
  };
}
function Zn(e, t) {
  return e || t ? el : tl;
}
function Qn(e, t) {
  return e || t ? sf : of;
}
function hl(e, { helper: t, removeHelper: n, inSSR: i }) {
  e.isBlock || (e.isBlock = !0, n(Zn(i, e.isComponent)), t(In), t(Qn(i, e.isComponent)));
}
const ba = new Uint8Array([123, 123]), Na = new Uint8Array([125, 125]);
function va(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Xe(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Kt(e) {
  return e === 47 || e === 62 || Xe(e);
}
function Fr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ae = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Eg {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = ba, this.delimiterClose = Na, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = ba, this.delimiterClose = Na;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, i = t + 1;
    for (let r = this.newlines.length - 1; r >= 0; r--) {
      const s = this.newlines[r];
      if (t > s) {
        n = r + 2, i = t - s;
        break;
      }
    }
    return {
      column: i,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      Kt(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Xe(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const i = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = i;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ae.TitleEnd || this.currentSequence === Ae.TextareaEnd && !this.inSFCRoot ? t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ae.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ae.Cdata.length && (this.state = 28, this.currentSequence = Ae.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ae.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : va(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    Kt(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (Kt(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Fr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Xe(t) || (t === 62 ? (B.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = va(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Xe(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, B.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Xe(t) || (B.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Xe(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || Kt(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : B.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || Kt(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || Kt(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || Kt(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), B.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || Kt(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Xe(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Xe(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Xe(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (B.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ae.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ae.ScriptEnd[3] ? this.startSpecial(Ae.ScriptEnd, 4) : t === Ae.StyleEnd[3] ? this.startSpecial(Ae.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ae.TitleEnd[3] ? this.startSpecial(Ae.TitleEnd, 4) : t === Ae.TextareaEnd[3] ? this.startSpecial(Ae.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ae.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const yg = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function lo(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function ln(e, t) {
  const n = lo("MODE", t), i = lo(e, t);
  return n === 3 ? i === !0 : i !== !1;
}
function ei(e, t, n, ...i) {
  const r = ln(e, t);
  return B.NODE_ENV !== "production" && r && Hr(e, t, n, ...i), r;
}
function Hr(e, t, n, ...i) {
  if (lo(e, t) === "suppress-warning")
    return;
  const { message: s, link: o } = yg[e], l = `(deprecation ${e}) ${typeof s == "function" ? s(...i) : s}${o ? `
  Details: ${o}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function ml(e) {
  throw e;
}
function ff(e) {
  B.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function fe(e, t, n, i) {
  const r = B.NODE_ENV !== "production" ? (n || _g)[e] + (i || "") : `https://vuejs.org/error-reference/#compiler-${e}`, s = new SyntaxError(String(r));
  return s.code = e, s.loc = t, s;
}
const _g = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, Ye = (e) => e.type === 4 && e.isStatic;
function pf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Oi;
    case "Suspense":
    case "suspense":
      return Qo;
    case "KeepAlive":
    case "keep-alive":
      return Mr;
    case "BaseTransition":
    case "base-transition":
      return rf;
  }
}
const bg = /^\d|[^\$\w\xA0-\uFFFF]/, gl = (e) => !bg.test(e), Ng = /[A-Za-z_$\xA0-\uFFFF]/, vg = /[\.\?\w$\xA0-\uFFFF]/, Og = /\s+[.[]\s*|\s*[.[]\s+/g, Sg = (e) => {
  e = e.trim().replace(Og, (o) => o.trim());
  let t = 0, n = [], i = 0, r = 0, s = null;
  for (let o = 0; o < e.length; o++) {
    const l = e.charAt(o);
    switch (t) {
      case 0:
        if (l === "[")
          n.push(t), t = 1, i++;
        else if (l === "(")
          n.push(t), t = 2, r++;
        else if (!(o === 0 ? Ng : vg).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (n.push(t), t = 3, s = l) : l === "[" ? i++ : l === "]" && (--i || (t = n.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          n.push(t), t = 3, s = l;
        else if (l === "(")
          r++;
        else if (l === ")") {
          if (o === e.length - 1)
            return !1;
          --r || (t = n.pop());
        }
        break;
      case 3:
        l === s && (t = n.pop(), s = null);
        break;
    }
  }
  return !i && !r;
}, df = Sg;
function Oa(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function st(e, t, n = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 7 && (n || r.exp) && (Q(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function Mi(e, t, n = !1, i = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r];
    if (s.type === 6) {
      if (n) continue;
      if (s.name === t && (s.value || i))
        return s;
    } else if (s.name === "bind" && (s.exp || i) && Qt(s.arg, t))
      return s;
  }
}
function Qt(e, t) {
  return !!(e && Ye(e) && e.content === t);
}
function wg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function Vs(e) {
  return e.type === 5 || e.type === 2;
}
function Tg(e) {
  return e.type === 7 && e.name === "slot";
}
function Ur(e) {
  return e.type === 1 && e.tagType === 3;
}
function Br(e) {
  return e.type === 1 && e.tagType === 2;
}
const Dg = /* @__PURE__ */ new Set([Ri, qi]);
function hf(e, t = []) {
  if (e && !Q(e) && e.type === 14) {
    const n = e.callee;
    if (!Q(n) && Dg.has(n))
      return hf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function jr(e, t, n) {
  let i, r = e.type === 13 ? e.props : e.arguments[2], s = [], o;
  if (r && !Q(r) && r.type === 14) {
    const l = hf(r);
    r = l[0], s = l[1], o = s[s.length - 1];
  }
  if (r == null || Q(r))
    i = ot([t]);
  else if (r.type === 14) {
    const l = r.arguments[0];
    !Q(l) && l.type === 15 ? Sa(t, l) || l.properties.unshift(t) : r.callee === fl ? i = Ce(n.helper(Lr), [
      ot([t]),
      r
    ]) : r.arguments.unshift(ot([t])), !i && (i = r);
  } else r.type === 15 ? (Sa(t, r) || r.properties.unshift(t), i = r) : (i = Ce(n.helper(Lr), [
    ot([t]),
    r
  ]), o && o.callee === qi && (o = s[s.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = i : e.props = i : o ? o.arguments[0] = i : e.arguments[2] = i;
}
function Sa(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const i = e.key.content;
    n = t.properties.some(
      (r) => r.key.type === 4 && r.key.content === i
    );
  }
  return n;
}
function Li(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : e.charCodeAt(i).toString())}`;
}
function Cg(e) {
  return e.type === 14 && e.callee === dl ? e.arguments[1].returns : e;
}
const Vg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, mf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: fr,
  isPreTag: fr,
  isCustomElement: fr,
  onError: ml,
  onWarn: ff,
  comments: B.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ae = mf, $i = null, Rt = "", Le = null, ce = null, ze = "", xt = -1, mn = -1, Kr = 0, Yt = !1, ao = null;
const ye = [], me = new Eg(ye, {
  onerr: qe,
  ontext(e, t) {
    lr(Re(e, t), e, t);
  },
  ontextentity(e, t, n) {
    lr(e, t, n);
  },
  oninterpolation(e, t) {
    if (Yt)
      return lr(Re(e, t), e, t);
    let n = e + me.delimiterOpen.length, i = t - me.delimiterClose.length;
    for (; Xe(Rt.charCodeAt(n)); )
      n++;
    for (; Xe(Rt.charCodeAt(i - 1)); )
      i--;
    let r = Re(n, i);
    r.includes("&") && (r = ae.decodeEntities(r, !1)), co({
      type: 5,
      content: Er(r, !1, Te(n, i)),
      loc: Te(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Re(e, t);
    Le = {
      type: 1,
      tag: n,
      ns: ae.getNamespace(n, ye[0], ae.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Te(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    Ta(e);
  },
  onclosetag(e, t) {
    const n = Re(e, t);
    if (!ae.isVoidTag(n)) {
      let i = !1;
      for (let r = 0; r < ye.length; r++)
        if (ye[r].tag.toLowerCase() === n.toLowerCase()) {
          i = !0, r > 0 && qe(24, ye[0].loc.start.offset);
          for (let o = 0; o <= r; o++) {
            const l = ye.shift();
            gr(l, t, o < r);
          }
          break;
        }
      i || qe(23, gf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Le.tag;
    Le.isSelfClosing = !0, Ta(e), ye[0] && ye[0].tag === t && gr(ye.shift(), e);
  },
  onattribname(e, t) {
    ce = {
      type: 6,
      name: Re(e, t),
      nameLoc: Te(e, t),
      value: void 0,
      loc: Te(e)
    };
  },
  ondirname(e, t) {
    const n = Re(e, t), i = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Yt && i === "" && qe(26, e), Yt || i === "")
      ce = {
        type: 6,
        name: n,
        nameLoc: Te(e, t),
        value: void 0,
        loc: Te(e)
      };
    else if (ce = {
      type: 7,
      name: i,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? ["prop"] : [],
      loc: Te(e)
    }, i === "pre") {
      Yt = me.inVPre = !0, ao = Le;
      const r = Le.props;
      for (let s = 0; s < r.length; s++)
        r[s].type === 7 && (r[s] = Fg(r[s]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Re(e, t);
    if (Yt)
      ce.name += n, En(ce.nameLoc, t);
    else {
      const i = n[0] !== "[";
      ce.arg = Er(
        i ? n : n.slice(1, -1),
        i,
        Te(e, t),
        i ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Re(e, t);
    if (Yt)
      ce.name += "." + n, En(ce.nameLoc, t);
    else if (ce.name === "slot") {
      const i = ce.arg;
      i && (i.content += "." + n, En(i.loc, t));
    } else
      ce.modifiers.push(n);
  },
  onattribdata(e, t) {
    ze += Re(e, t), xt < 0 && (xt = e), mn = t;
  },
  onattribentity(e, t, n) {
    ze += e, xt < 0 && (xt = t), mn = n;
  },
  onattribnameend(e) {
    const t = ce.loc.start.offset, n = Re(t, e);
    ce.type === 7 && (ce.rawName = n), Le.props.some(
      (i) => (i.type === 7 ? i.rawName : i.name) === n
    ) && qe(2, t);
  },
  onattribend(e, t) {
    if (Le && ce) {
      if (En(ce.loc, t), e !== 0)
        if (ze.includes("&") && (ze = ae.decodeEntities(
          ze,
          !0
        )), ce.type === 6)
          ce.name === "class" && (ze = yf(ze).trim()), e === 1 && !ze && qe(13, t), ce.value = {
            type: 2,
            content: ze,
            loc: e === 1 ? Te(xt, mn) : Te(xt - 1, mn + 1)
          }, me.inSFCRoot && Le.tag === "template" && ce.name === "lang" && ze && ze !== "html" && me.enterRCDATA(Fr("</template"), 0);
        else {
          let n = 0;
          ce.exp = Er(
            ze,
            !1,
            Te(xt, mn),
            0,
            n
          ), ce.name === "for" && (ce.forParseResult = kg(ce.exp));
          let i = -1;
          ce.name === "bind" && (i = ce.modifiers.indexOf("sync")) > -1 && ei(
            "COMPILER_V_BIND_SYNC",
            ae,
            ce.loc,
            ce.rawName
          ) && (ce.name = "model", ce.modifiers.splice(i, 1));
        }
      (ce.type !== 7 || ce.name !== "pre") && Le.props.push(ce);
    }
    ze = "", xt = mn = -1;
  },
  oncomment(e, t) {
    ae.comments && co({
      type: 3,
      content: Re(e, t),
      loc: Te(e - 4, t + 3)
    });
  },
  onend() {
    const e = Rt.length;
    if (B.NODE_ENV !== "production" && me.state !== 1)
      switch (me.state) {
        case 5:
        case 8:
          qe(5, e);
          break;
        case 3:
        case 4:
          qe(
            25,
            me.sectionStart
          );
          break;
        case 28:
          me.currentSequence === Ae.CdataEnd ? qe(6, e) : qe(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          qe(9, e);
          break;
      }
    for (let t = 0; t < ye.length; t++)
      gr(ye[t], e - 1), qe(24, ye[t].loc.start.offset);
  },
  oncdata(e, t) {
    ye[0].ns !== 0 ? lr(Re(e, t), e, t) : qe(1, e - 9);
  },
  onprocessinginstruction(e) {
    (ye[0] ? ye[0].ns : ae.ns) === 0 && qe(
      21,
      e - 1
    );
  }
}), wa = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, xg = /^\(|\)$/g;
function kg(e) {
  const t = e.loc, n = e.content, i = n.match(Vg);
  if (!i) return;
  const [, r, s] = i, o = (u, h, g = !1) => {
    const y = t.start.offset + h, S = y + u.length;
    return Er(
      u,
      !1,
      Te(y, S),
      0,
      g ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(s.trim(), n.indexOf(s, r.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = r.trim().replace(xg, "").trim();
  const c = r.indexOf(a), f = a.match(wa);
  if (f) {
    a = a.replace(wa, "").trim();
    const u = f[1].trim();
    let h;
    if (u && (h = n.indexOf(u, c + a.length), l.key = o(u, h, !0)), f[2]) {
      const g = f[2].trim();
      g && (l.index = o(
        g,
        n.indexOf(
          g,
          l.key ? h + u.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = o(a, c, !0)), l;
}
function Re(e, t) {
  return Rt.slice(e, t);
}
function Ta(e) {
  me.inSFCRoot && (Le.innerLoc = Te(e + 1, e + 1)), co(Le);
  const { tag: t, ns: n } = Le;
  n === 0 && ae.isPreTag(t) && Kr++, ae.isVoidTag(t) ? gr(Le, e) : (ye.unshift(Le), (n === 1 || n === 2) && (me.inXML = !0)), Le = null;
}
function lr(e, t, n) {
  {
    const s = ye[0] && ye[0].tag;
    s !== "script" && s !== "style" && e.includes("&") && (e = ae.decodeEntities(e, !1));
  }
  const i = ye[0] || $i, r = i.children[i.children.length - 1];
  r && r.type === 2 ? (r.content += e, En(r.loc, n)) : i.children.push({
    type: 2,
    content: e,
    loc: Te(t, n)
  });
}
function gr(e, t, n = !1) {
  n ? En(e.loc, gf(t, 60)) : En(e.loc, Ig(t, 62) + 1), me.inSFCRoot && (e.children.length ? e.innerLoc.end = ie({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = ie({}, e.innerLoc.start), e.innerLoc.source = Re(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: i, ns: r } = e;
  Yt || (i === "slot" ? e.tagType = 2 : Da(e) ? e.tagType = 3 : Rg(e) && (e.tagType = 1)), me.inRCDATA || (e.children = Ef(e.children, e.tag)), r === 0 && ae.isPreTag(i) && Kr--, ao === e && (Yt = me.inVPre = !1, ao = null), me.inXML && (ye[0] ? ye[0].ns : ae.ns) === 0 && (me.inXML = !1);
  {
    const s = e.props;
    if (B.NODE_ENV !== "production" && ln(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ae
    )) {
      let l = !1, a = !1;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        if (f.type === 7 && (f.name === "if" ? l = !0 : f.name === "for" && (a = !0)), l && a) {
          Hr(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ae,
            e.loc
          );
          break;
        }
      }
    }
    if (!me.inSFCRoot && ln(
      "COMPILER_NATIVE_TEMPLATE",
      ae
    ) && e.tag === "template" && !Da(e)) {
      B.NODE_ENV !== "production" && Hr(
        "COMPILER_NATIVE_TEMPLATE",
        ae,
        e.loc
      );
      const l = ye[0] || $i, a = l.children.indexOf(e);
      l.children.splice(a, 1, ...e.children);
    }
    const o = s.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && ei(
      "COMPILER_INLINE_TEMPLATE",
      ae,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: Re(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function Ig(e, t) {
  let n = e;
  for (; Rt.charCodeAt(n) !== t && n < Rt.length - 1; ) n++;
  return n;
}
function gf(e, t) {
  let n = e;
  for (; Rt.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Ag = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Da({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Ag.has(t[n].name))
        return !0;
  }
  return !1;
}
function Rg({ tag: e, props: t }) {
  if (ae.isCustomElement(e))
    return !1;
  if (e === "component" || Pg(e.charCodeAt(0)) || pf(e) || ae.isBuiltInComponent && ae.isBuiltInComponent(e) || ae.isNativeTag && !ae.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (i.type === 6) {
      if (i.name === "is" && i.value) {
        if (i.value.content.startsWith("vue:"))
          return !0;
        if (ei(
          "COMPILER_IS_ON_ELEMENT",
          ae,
          i.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      i.name === "bind" && Qt(i.arg, "is") && ei(
        "COMPILER_IS_ON_ELEMENT",
        ae,
        i.loc
      )
    )
      return !0;
  }
  return !1;
}
function Pg(e) {
  return e > 64 && e < 91;
}
const Mg = /\r\n/g;
function Ef(e, t) {
  const n = ae.whitespace !== "preserve";
  let i = !1;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (s.type === 2)
      if (Kr)
        s.content = s.content.replace(Mg, `
`);
      else if (Lg(s.content)) {
        const o = e[r - 1] && e[r - 1].type, l = e[r + 1] && e[r + 1].type;
        !o || !l || n && (o === 3 && (l === 3 || l === 1) || o === 1 && (l === 3 || l === 1 && $g(s.content))) ? (i = !0, e[r] = null) : s.content = " ";
      } else n && (s.content = yf(s.content));
  }
  if (Kr && t && ae.isPreTag(t)) {
    const r = e[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  return i ? e.filter(Boolean) : e;
}
function Lg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Xe(e.charCodeAt(t)))
      return !1;
  return !0;
}
function $g(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function yf(e) {
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++)
    Xe(e.charCodeAt(i)) ? n || (t += " ", n = !0) : (t += e[i], n = !1);
  return t;
}
function co(e) {
  (ye[0] || $i).children.push(e);
}
function Te(e, t) {
  return {
    start: me.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : me.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Re(e, t)
  };
}
function En(e, t) {
  e.end = me.getPos(t), e.source = Re(e.start.offset, t);
}
function Fg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Te(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function Er(e, t = !1, n, i = 0, r = 0) {
  return ne(e, t, n, i);
}
function qe(e, t, n) {
  ae.onError(
    fe(e, Te(t, t), void 0, n)
  );
}
function Hg() {
  me.reset(), Le = null, ce = null, ze = "", xt = -1, mn = -1, ye.length = 0;
}
function Ug(e, t) {
  if (Hg(), Rt = e, ae = ie({}, mf), t) {
    let r;
    for (r in t)
      t[r] != null && (ae[r] = t[r]);
  }
  if (B.NODE_ENV !== "production" && !ae.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  me.mode = ae.parseMode === "html" ? 1 : ae.parseMode === "sfc" ? 2 : 0, me.inXML = ae.ns === 1 || ae.ns === 2;
  const n = t && t.delimiters;
  n && (me.delimiterOpen = Fr(n[0]), me.delimiterClose = Fr(n[1]));
  const i = $i = hg([], e);
  return me.parse(Rt), i.loc = Te(0, e.length), i.children = Ef(i.children), $i = null, i;
}
function Bg(e, t) {
  yr(
    e,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    _f(e, e.children[0])
  );
}
function _f(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Br(t);
}
function yr(e, t, n = !1) {
  const { children: i } = e, r = i.length;
  let s = 0;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (l.type === 1 && l.tagType === 0) {
      const a = n ? 0 : lt(l, t);
      if (a > 0) {
        if (a >= 2) {
          l.codegenNode.patchFlag = -1, l.codegenNode = t.hoist(l.codegenNode), s++;
          continue;
        }
      } else {
        const c = l.codegenNode;
        if (c.type === 13) {
          const f = c.patchFlag;
          if ((f === void 0 || f === 512 || f === 1) && Nf(l, t) >= 2) {
            const u = vf(l);
            u && (c.props = t.hoist(u));
          }
          c.dynamicProps && (c.dynamicProps = t.hoist(c.dynamicProps));
        }
      }
    }
    if (l.type === 1) {
      const a = l.tagType === 1;
      a && t.scopes.vSlot++, yr(l, t), a && t.scopes.vSlot--;
    } else if (l.type === 11)
      yr(l, t, l.children.length === 1);
    else if (l.type === 9)
      for (let a = 0; a < l.branches.length; a++)
        yr(
          l.branches[a],
          t,
          l.branches[a].children.length === 1
        );
  }
  if (s && t.transformHoist && t.transformHoist(i, t, e), s && s === r && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && j(e.codegenNode.children)) {
    const o = t.hoist(
      zi(e.codegenNode.children)
    );
    t.hmr && (o.content = `[...${o.content}]`), e.codegenNode.children = o;
  }
}
function lt(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const i = n.get(e);
      if (i !== void 0)
        return i;
      const r = e.codegenNode;
      if (r.type !== 13 || r.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (r.patchFlag === void 0) {
        let o = 3;
        const l = Nf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < o && (o = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = lt(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < o && (o = c);
        }
        if (o > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const f = lt(c.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < o && (o = f);
            }
          }
        if (r.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(In), t.removeHelper(
            Qn(t.inSSR, r.isComponent)
          ), r.isBlock = !1, t.helper(Zn(t.inSSR, r.isComponent));
        }
        return n.set(e, o), o;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return lt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let o = 0; o < e.children.length; o++) {
        const l = e.children[o];
        if (Q(l) || Qe(l))
          continue;
        const a = lt(l, t);
        if (a === 0)
          return 0;
        a < s && (s = a);
      }
      return s;
    default:
      return 0;
  }
}
const jg = /* @__PURE__ */ new Set([
  cl,
  ul,
  Ri,
  qi
]);
function bf(e, t) {
  if (e.type === 14 && !Q(e.callee) && jg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return lt(n, t);
    if (n.type === 14)
      return bf(n, t);
  }
  return 0;
}
function Nf(e, t) {
  let n = 3;
  const i = vf(e);
  if (i && i.type === 15) {
    const { properties: r } = i;
    for (let s = 0; s < r.length; s++) {
      const { key: o, value: l } = r[s], a = lt(o, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = lt(l, t) : l.type === 14 ? c = bf(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function vf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Kg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  hmr: r = !1,
  cacheHandlers: s = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = pe,
  isCustomElement: f = pe,
  expressionPlugins: u = [],
  scopeId: h = null,
  slotted: g = !0,
  ssr: y = !1,
  inSSR: S = !1,
  ssrCssVars: L = "",
  bindingMetadata: A = oe,
  inline: v = !1,
  isTS: E = !1,
  onError: _ = ml,
  onWarn: N = ff,
  compatConfig: V
}) {
  const C = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), k = {
    // options
    filename: t,
    selfName: C && Ot(ge(C[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    hmr: r,
    cacheHandlers: s,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: f,
    expressionPlugins: u,
    scopeId: h,
    slotted: g,
    ssr: y,
    inSSR: S,
    ssrCssVars: L,
    bindingMetadata: A,
    inline: v,
    isTS: E,
    onError: _,
    onWarn: N,
    compatConfig: V,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(b) {
      const T = k.helpers.get(b) || 0;
      return k.helpers.set(b, T + 1), b;
    },
    removeHelper(b) {
      const T = k.helpers.get(b);
      if (T) {
        const M = T - 1;
        M ? k.helpers.set(b, M) : k.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${Jn[k.helper(b)]}`;
    },
    replaceNode(b) {
      if (B.NODE_ENV !== "production") {
        if (!k.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!k.parent)
          throw new Error("Cannot replace root node.");
      }
      k.parent.children[k.childIndex] = k.currentNode = b;
    },
    removeNode(b) {
      if (B.NODE_ENV !== "production" && !k.parent)
        throw new Error("Cannot remove root node.");
      const T = k.parent.children, M = b ? T.indexOf(b) : k.currentNode ? k.childIndex : -1;
      if (B.NODE_ENV !== "production" && M < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === k.currentNode ? (k.currentNode = null, k.onNodeRemoved()) : k.childIndex > M && (k.childIndex--, k.onNodeRemoved()), k.parent.children.splice(M, 1);
    },
    onNodeRemoved: pe,
    addIdentifiers(b) {
    },
    removeIdentifiers(b) {
    },
    hoist(b) {
      Q(b) && (b = ne(b)), k.hoists.push(b);
      const T = ne(
        `_hoisted_${k.hoists.length}`,
        !1,
        b.loc,
        2
      );
      return T.hoisted = b, T;
    },
    cache(b, T = !1) {
      return mg(k.cached++, b, T);
    }
  };
  return k.filters = /* @__PURE__ */ new Set(), k;
}
function Wg(e, t) {
  const n = Kg(e, t);
  ps(e, n), t.hoistStatic && Bg(e, n), t.ssr || qg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function qg(e, t) {
  const { helper: n } = t, { children: i } = e;
  if (i.length === 1) {
    const r = i[0];
    if (_f(e, r) && r.codegenNode) {
      const s = r.codegenNode;
      s.type === 13 && hl(s, t), e.codegenNode = s;
    } else
      e.codegenNode = r;
  } else if (i.length > 1) {
    let r = 64, s = tn[64];
    B.NODE_ENV !== "production" && i.filter((o) => o.type !== 3).length === 1 && (r |= 2048, s += `, ${tn[2048]}`), e.codegenNode = Pi(
      t,
      n(Ai),
      void 0,
      e.children,
      r,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function zg(e, t) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const r = e.children[n];
    Q(r) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = i, ps(r, t));
  }
}
function ps(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, i = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s](e, t);
    if (o && (j(o) ? i.push(...o) : i.push(o)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Wi);
      break;
    case 5:
      t.ssr || t.helper(fs);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++)
        ps(e.branches[s], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      zg(e, t);
      break;
  }
  t.currentNode = e;
  let r = i.length;
  for (; r--; )
    i[r]();
}
function Of(e, t) {
  const n = Q(e) ? (i) => i === e : (i) => e.test(i);
  return (i, r) => {
    if (i.type === 1) {
      const { props: s } = i;
      if (i.tagType === 3 && s.some(Tg))
        return;
      const o = [];
      for (let l = 0; l < s.length; l++) {
        const a = s[l];
        if (a.type === 7 && n(a.name)) {
          s.splice(l, 1), l--;
          const c = t(i, a, r);
          c && o.push(c);
        }
      }
      return o;
    }
  };
}
const ds = "/*#__PURE__*/", Sf = (e) => `${Jn[e]}: _${Jn[e]}`;
function Gg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: i = !1,
  filename: r = "template.vue.html",
  scopeId: s = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: f = !1,
  isTS: u = !1,
  inSSR: h = !1
}) {
  const g = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: r,
    scopeId: s,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: c,
    ssr: f,
    isTS: u,
    inSSR: h,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(S) {
      return `_${Jn[S]}`;
    },
    push(S, L = -2, A) {
      g.code += S;
    },
    indent() {
      y(++g.indentLevel);
    },
    deindent(S = !1) {
      S ? --g.indentLevel : y(--g.indentLevel);
    },
    newline() {
      y(g.indentLevel);
    }
  };
  function y(S) {
    g.push(
      `
` + "  ".repeat(S),
      0
      /* Start */
    );
  }
  return g;
}
function Yg(e, t = {}) {
  const n = Gg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: i,
    push: r,
    prefixIdentifiers: s,
    indent: o,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: f
  } = n, u = Array.from(e.helpers), h = u.length > 0, g = !s && i !== "module";
  Jg(e, n);
  const S = f ? "ssrRender" : "render", A = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (r(`function ${S}(${A}) {`), o(), g && (r("with (_ctx) {"), o(), h && (r(
    `const { ${u.map(Sf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (xs(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (xs(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), xs(e.filters, "filter", n), a()), e.temps > 0) {
    r("let ");
    for (let v = 0; v < e.temps; v++)
      r(`${v > 0 ? ", " : ""}_temp${v}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(
    `
`,
    0
    /* Start */
  ), a()), f || r("return "), e.codegenNode ? He(e.codegenNode, n) : r("null"), g && (l(), r("}")), l(), r("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Jg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: r,
    newline: s,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, c = l, f = Array.from(e.helpers);
  if (f.length > 0 && (r(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      el,
      tl,
      Wi,
      nl,
      lf
    ].filter((h) => f.includes(h)).map(Sf).join(", ");
    r(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  Xg(e.hoists, t), s(), r("return ");
}
function xs(e, t, { helper: n, push: i, newline: r, isTS: s }) {
  const o = n(
    t === "filter" ? ol : t === "component" ? il : sl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), i(
      `const ${Li(a, t)} = ${o}(${JSON.stringify(a)}${c ? ", true" : ""})${s ? "!" : ""}`
    ), l < e.length - 1 && r();
  }
}
function Xg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: i, helper: r, scopeId: s, mode: o } = t;
  i();
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    a && (n(
      `const _hoisted_${l + 1} = `
    ), He(a, t), i());
  }
  t.pure = !1;
}
function Zg(e) {
  return Q(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function El(e, t) {
  const n = e.length > 3 || B.NODE_ENV !== "production" && e.some((i) => j(i) || !Zg(i));
  t.push("["), n && t.indent(), Gi(e, t, n), n && t.deindent(), t.push("]");
}
function Gi(e, t, n = !1, i = !0) {
  const { push: r, newline: s } = t;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Q(l) ? r(
      l,
      -3
      /* Unknown */
    ) : j(l) ? El(l, t) : He(l, t), o < e.length - 1 && (n ? (i && r(","), s()) : i && r(", "));
  }
}
function He(e, t) {
  if (Q(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Qe(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      B.NODE_ENV !== "production" && Oa(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), He(e.codegenNode, t);
      break;
    case 2:
      Qg(e, t);
      break;
    case 4:
      wf(e, t);
      break;
    case 5:
      eE(e, t);
      break;
    case 12:
      He(e.codegenNode, t);
      break;
    case 8:
      Tf(e, t);
      break;
    case 3:
      nE(e, t);
      break;
    case 13:
      iE(e, t);
      break;
    case 14:
      sE(e, t);
      break;
    case 15:
      oE(e, t);
      break;
    case 17:
      lE(e, t);
      break;
    case 18:
      aE(e, t);
      break;
    case 19:
      cE(e, t);
      break;
    case 20:
      uE(e, t);
      break;
    case 21:
      Gi(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (B.NODE_ENV !== "production")
        return Oa(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Qg(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function wf(e, t) {
  const { content: n, isStatic: i } = e;
  t.push(
    i ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function eE(e, t) {
  const { push: n, helper: i, pure: r } = t;
  r && n(ds), n(`${i(fs)}(`), He(e.content, t), n(")");
}
function Tf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    Q(i) ? t.push(
      i,
      -3
      /* Unknown */
    ) : He(i, t);
  }
}
function tE(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Tf(e, t), n("]");
  else if (e.isStatic) {
    const i = gl(e.content) ? e.content : JSON.stringify(e.content);
    n(i, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function nE(e, t) {
  const { push: n, helper: i, pure: r } = t;
  r && n(ds), n(
    `${i(Wi)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function iE(e, t) {
  const { push: n, helper: i, pure: r } = t, {
    tag: s,
    props: o,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: f,
    isBlock: u,
    disableTracking: h,
    isComponent: g
  } = e;
  let y;
  if (a)
    if (B.NODE_ENV !== "production")
      if (a < 0)
        y = a + ` /* ${tn[a]} */`;
      else {
        const L = Object.keys(tn).map(Number).filter((A) => A > 0 && a & A).map((A) => tn[A]).join(", ");
        y = a + ` /* ${L} */`;
      }
    else
      y = String(a);
  f && n(i(ll) + "("), u && n(`(${i(In)}(${h ? "true" : ""}), `), r && n(ds);
  const S = u ? Qn(t.inSSR, g) : Zn(t.inSSR, g);
  n(i(S) + "(", -2, e), Gi(
    rE([s, o, l, y, c]),
    t
  ), n(")"), u && n(")"), f && (n(", "), He(f, t), n(")"));
}
function rE(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function sE(e, t) {
  const { push: n, helper: i, pure: r } = t, s = Q(e.callee) ? e.callee : i(e.callee);
  r && n(ds), n(s + "(", -2, e), Gi(e.arguments, t), n(")");
}
function oE(e, t) {
  const { push: n, indent: i, deindent: r, newline: s } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || B.NODE_ENV !== "production" && o.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && i();
  for (let a = 0; a < o.length; a++) {
    const { key: c, value: f } = o[a];
    tE(c, t), n(": "), He(f, t), a < o.length - 1 && (n(","), s());
  }
  l && r(), n(l ? "}" : " }");
}
function lE(e, t) {
  El(e.elements, t);
}
function aE(e, t) {
  const { push: n, indent: i, deindent: r } = t, { params: s, returns: o, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Jn[pl]}(`), n("(", -2, e), j(s) ? Gi(s, t) : s && He(s, t), n(") => "), (a || l) && (n("{"), i()), o ? (a && n("return "), j(o) ? El(o, t) : He(o, t)) : l && He(l, t), (a || l) && (r(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function cE(e, t) {
  const { test: n, consequent: i, alternate: r, newline: s } = e, { push: o, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !gl(n.content);
    u && o("("), wf(n, t), u && o(")");
  } else
    o("("), He(n, t), o(")");
  s && l(), t.indentLevel++, s || o(" "), o("? "), He(i, t), t.indentLevel--, s && c(), s || o(" "), o(": ");
  const f = r.type === 19;
  f || t.indentLevel++, He(r, t), f || t.indentLevel--, s && a(
    !0
    /* without newline */
  );
}
function uE(e, t) {
  const { push: n, helper: i, indent: r, deindent: s, newline: o } = t;
  n(`_cache[${e.index}] || (`), e.isVOnce && (r(), n(`${i($r)}(-1),`), o(), n("(")), n(`_cache[${e.index}] = `), He(e.value, t), e.isVOnce && (n(`).cacheIndex = ${e.index},`), o(), n(`${i($r)}(1),`), o(), n(`_cache[${e.index}]`), s()), n(")");
}
const fE = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), pE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function yn(e, t, n = !1, i = !1) {
  const r = e.content;
  if (r.trim())
    try {
      new Function(
        i ? ` ${r} ` : `return ${n ? `(${r}) => {}` : `(${r})`}`
      );
    } catch (s) {
      let o = s.message;
      const l = r.replace(pE, "").match(fE);
      l && (o = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        fe(
          45,
          e.loc,
          void 0,
          o
        )
      );
    }
}
const dE = (e, t) => {
  if (e.type === 5)
    e.content = ks(
      e.content,
      t
    );
  else if (e.type === 1)
    for (let n = 0; n < e.props.length; n++) {
      const i = e.props[n];
      if (i.type === 7 && i.name !== "for") {
        const r = i.exp, s = i.arg;
        r && r.type === 4 && !(i.name === "on" && s) && (i.exp = ks(
          r,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), s && s.type === 4 && !s.isStatic && (i.arg = ks(s, t));
      }
    }
};
function ks(e, t, n = !1, i = !1, r = Object.create(t.identifiers)) {
  return B.NODE_ENV !== "production" && yn(e, t, n, i), e;
}
const hE = Of(
  /^(if|else|else-if)$/,
  (e, t, n) => mE(e, t, n, (i, r, s) => {
    const o = n.parent.children;
    let l = o.indexOf(i), a = 0;
    for (; l-- >= 0; ) {
      const c = o[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (s)
        i.codegenNode = Va(
          r,
          a,
          n
        );
      else {
        const c = EE(i.codegenNode);
        c.alternate = Va(
          r,
          a + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function mE(e, t, n, i) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc;
    n.onError(
      fe(28, t.loc)
    ), t.exp = ne("true", !1, r);
  }
  if (B.NODE_ENV !== "production" && t.exp && yn(t.exp, n), t.name === "if") {
    const r = Ca(e, t), s = {
      type: 9,
      loc: e.loc,
      branches: [r]
    };
    if (n.replaceNode(s), i)
      return i(s, r, !0);
  } else {
    const r = n.parent.children, s = [];
    let o = r.indexOf(e);
    for (; o-- >= -1; ) {
      const l = r[o];
      if (l && l.type === 3) {
        n.removeNode(l), B.NODE_ENV !== "production" && s.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          fe(30, e.loc)
        ), n.removeNode();
        const a = Ca(e, t);
        if (B.NODE_ENV !== "production" && s.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...s, ...a.children]), B.NODE_ENV !== "production") {
          const f = a.userKey;
          f && l.branches.forEach(({ userKey: u }) => {
            gE(u, f) && n.onError(
              fe(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = i && i(l, a, !1);
        ps(a, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          fe(30, e.loc)
        );
      break;
    }
  }
}
function Ca(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !st(e, "for") ? e.children : [e],
    userKey: Mi(e, "key"),
    isTemplateIf: n
  };
}
function Va(e, t, n) {
  return e.condition ? oo(
    e.condition,
    xa(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ce(n.helper(Wi), [
      B.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : xa(e, t, n);
}
function xa(e, t, n) {
  const { helper: i } = n, r = Oe(
    "key",
    ne(
      `${t}`,
      !1,
      et,
      2
    )
  ), { children: s } = e, o = s[0];
  if (s.length !== 1 || o.type !== 1)
    if (s.length === 1 && o.type === 11) {
      const a = o.codegenNode;
      return jr(a, r, n), a;
    } else {
      let a = 64, c = tn[64];
      return B.NODE_ENV !== "production" && !e.isTemplateIf && s.filter((f) => f.type !== 3).length === 1 && (a |= 2048, c += `, ${tn[2048]}`), Pi(
        n,
        i(Ai),
        ot([r]),
        s,
        a,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const a = o.codegenNode, c = Cg(a);
    return c.type === 13 && hl(c, n), jr(c, r, n), a;
  }
}
function gE(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, i = t.exp;
    if (n.type !== i.type || n.type !== 4 || n.isStatic !== i.isStatic || n.content !== i.content)
      return !1;
  }
  return !0;
}
function EE(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const yE = (e, t, n) => {
  const { modifiers: i, loc: r } = e, s = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (s.type !== 4 || !s.isStatic)
      return n.onError(
        fe(
          52,
          s.loc
        )
      ), {
        props: [
          Oe(s, ne("", !0, r))
        ]
      };
    Df(e), o = e.exp;
  }
  return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), i.includes("camel") && (s.type === 4 ? s.isStatic ? s.content = ge(s.content) : s.content = `${n.helperString(ro)}(${s.content})` : (s.children.unshift(`${n.helperString(ro)}(`), s.children.push(")"))), n.inSSR || (i.includes("prop") && ka(s, "."), i.includes("attr") && ka(s, "^")), {
    props: [Oe(s, o)]
  };
}, Df = (e, t) => {
  const n = e.arg, i = ge(n.content);
  e.exp = ne(i, !1, n.loc);
}, ka = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, _E = Of(
  "for",
  (e, t, n) => {
    const { helper: i, removeHelper: r } = n;
    return bE(e, t, n, (s) => {
      const o = Ce(i(al), [
        s.source
      ]), l = Ur(e), a = st(e, "memo"), c = Mi(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && Df(c);
      const f = c && (c.type === 6 ? c.value ? ne(c.value.content, !0) : void 0 : c.exp), u = c && f ? Oe("key", f) : null, h = s.source.type === 4 && s.source.constType > 0, g = h ? 64 : c ? 128 : 256;
      return s.codegenNode = Pi(
        n,
        i(Ai),
        void 0,
        o,
        g,
        void 0,
        void 0,
        !0,
        !h,
        !1,
        e.loc
      ), () => {
        let y;
        const { children: S } = s;
        B.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const E = Mi(v, "key");
            if (E)
              return n.onError(
                fe(
                  33,
                  E.loc
                )
              ), !0;
          }
        });
        const L = S.length !== 1 || S[0].type !== 1, A = Br(e) ? e : l && e.children.length === 1 && Br(e.children[0]) ? e.children[0] : null;
        if (A ? (y = A.codegenNode, l && u && jr(y, u, n)) : L ? y = Pi(
          n,
          i(Ai),
          u ? ot([u]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (y = S[0].codegenNode, l && u && jr(y, u, n), y.isBlock !== !h && (y.isBlock ? (r(In), r(
          Qn(n.inSSR, y.isComponent)
        )) : r(
          Zn(n.inSSR, y.isComponent)
        )), y.isBlock = !h, y.isBlock ? (i(In), i(Qn(n.inSSR, y.isComponent))) : i(Zn(n.inSSR, y.isComponent))), a) {
          const v = Xn(
            uo(s.parseResult, [
              ne("_cached")
            ])
          );
          v.body = gg([
            mt(["const _memo = (", a.exp, ")"]),
            mt([
              "if (_cached",
              ...f ? [" && _cached.key === ", f] : [],
              ` && ${n.helperString(
                uf
              )}(_cached, _memo)) return _cached`
            ]),
            mt(["const _item = ", y]),
            ne("_item.memo = _memo"),
            ne("return _item")
          ]), o.arguments.push(
            v,
            ne("_cache"),
            ne(String(n.cached++))
          );
        } else
          o.arguments.push(
            Xn(
              uo(s.parseResult),
              y,
              !0
            )
          );
      };
    });
  }
);
function bE(e, t, n, i) {
  if (!t.exp) {
    n.onError(
      fe(31, t.loc)
    );
    return;
  }
  const r = t.forParseResult;
  if (!r) {
    n.onError(
      fe(32, t.loc)
    );
    return;
  }
  Cf(r, n);
  const { addIdentifiers: s, removeIdentifiers: o, scopes: l } = n, { source: a, value: c, key: f, index: u } = r, h = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: f,
    objectIndexAlias: u,
    parseResult: r,
    children: Ur(e) ? e.children : [e]
  };
  n.replaceNode(h), l.vFor++;
  const g = i && i(h);
  return () => {
    l.vFor--, g && g();
  };
}
function Cf(e, t) {
  e.finalized || (B.NODE_ENV !== "production" && (yn(e.source, t), e.key && yn(
    e.key,
    t,
    !0
  ), e.index && yn(
    e.index,
    t,
    !0
  ), e.value && yn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function uo({ value: e, key: t, index: n }, i = []) {
  return NE([e, t, n, ...i]);
}
function NE(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, i) => n || ne("_".repeat(i + 1), !1));
}
const Ia = ne("undefined", !1), vE = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = st(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, OE = (e, t, n, i) => Xn(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : i
);
function SE(e, t, n = OE) {
  t.helper(pl);
  const { children: i, loc: r } = e, s = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = st(e, "slot", !0);
  if (a) {
    const { arg: L, exp: A } = a;
    L && !Ye(L) && (l = !0), s.push(
      Oe(
        L || ne("default", !0),
        n(A, void 0, i, r)
      )
    );
  }
  let c = !1, f = !1;
  const u = [], h = /* @__PURE__ */ new Set();
  let g = 0;
  for (let L = 0; L < i.length; L++) {
    const A = i[L];
    let v;
    if (!Ur(A) || !(v = st(A, "slot", !0))) {
      A.type !== 3 && u.push(A);
      continue;
    }
    if (a) {
      t.onError(
        fe(37, v.loc)
      );
      break;
    }
    c = !0;
    const { children: E, loc: _ } = A, {
      arg: N = ne("default", !0),
      exp: V,
      loc: C
    } = v;
    let k;
    Ye(N) ? k = N ? N.content : "default" : l = !0;
    const b = st(A, "for"), T = n(V, b, E, _);
    let M, w;
    if (M = st(A, "if"))
      l = !0, o.push(
        oo(
          M.exp,
          ar(N, T, g++),
          Ia
        )
      );
    else if (w = st(
      A,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let H = L, J;
      for (; H-- && (J = i[H], J.type === 3); )
        ;
      if (J && Ur(J) && st(J, /^(else-)?if$/)) {
        let X = o[o.length - 1];
        for (; X.alternate.type === 19; )
          X = X.alternate;
        X.alternate = w.exp ? oo(
          w.exp,
          ar(
            N,
            T,
            g++
          ),
          Ia
        ) : ar(N, T, g++);
      } else
        t.onError(
          fe(30, w.loc)
        );
    } else if (b) {
      l = !0;
      const H = b.forParseResult;
      H ? (Cf(H, t), o.push(
        Ce(t.helper(al), [
          H.source,
          Xn(
            uo(H),
            ar(N, T),
            !0
          )
        ])
      )) : t.onError(
        fe(
          32,
          b.loc
        )
      );
    } else {
      if (k) {
        if (h.has(k)) {
          t.onError(
            fe(
              38,
              C
            )
          );
          continue;
        }
        h.add(k), k === "default" && (f = !0);
      }
      s.push(Oe(N, T));
    }
  }
  if (!a) {
    const L = (A, v) => {
      const E = n(A, void 0, v, r);
      return t.compatConfig && (E.isNonScopedSlot = !0), Oe("default", E);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((A) => Vf(A)) && (f ? t.onError(
      fe(
        39,
        u[0].loc
      )
    ) : s.push(
      L(void 0, u)
    )) : s.push(L(void 0, i));
  }
  const y = l ? 2 : _r(e.children) ? 3 : 1;
  let S = ot(
    s.concat(
      Oe(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ne(
          y + (B.NODE_ENV !== "production" ? ` /* ${tp[y]} */` : ""),
          !1
        )
      )
    ),
    r
  );
  return o.length && (S = Ce(t.helper(cf), [
    S,
    zi(o)
  ])), {
    slots: S,
    hasDynamicSlots: l
  };
}
function ar(e, t, n) {
  const i = [
    Oe("name", e),
    Oe("fn", t)
  ];
  return n != null && i.push(
    Oe("key", ne(String(n), !0))
  ), ot(i);
}
function _r(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || _r(n.children))
          return !0;
        break;
      case 9:
        if (_r(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (_r(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Vf(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Vf(e.content);
}
const xf = /* @__PURE__ */ new WeakMap(), wE = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: i, props: r } = e, s = e.tagType === 1;
  let o = s ? TE(e, t) : `"${i}"`;
  const l = le(o) && o.callee === rl;
  let a, c, f = 0, u, h, g, y = (
    // dynamic component may resolve to plain elements
    l || o === Oi || o === Qo || !s && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject" || i === "math")
  );
  if (r.length > 0) {
    const S = kf(
      e,
      t,
      void 0,
      s,
      l
    );
    a = S.props, f = S.patchFlag, h = S.dynamicPropNames;
    const L = S.directives;
    g = L && L.length ? zi(
      L.map((A) => CE(A, t))
    ) : void 0, S.shouldUseBlock && (y = !0);
  }
  if (e.children.length > 0)
    if (o === Mr && (y = !0, f |= 1024, B.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      fe(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), s && // Teleport is not a real component and has dedicated runtime handling
    o !== Oi && // explained above.
    o !== Mr) {
      const { slots: L, hasDynamicSlots: A } = SE(e, t);
      c = L, A && (f |= 1024);
    } else if (e.children.length === 1 && o !== Oi) {
      const L = e.children[0], A = L.type, v = A === 5 || A === 8;
      v && lt(L, t) === 0 && (f |= 1), v || A === 2 ? c = L : c = e.children;
    } else
      c = e.children;
  h && h.length && (u = VE(h)), e.codegenNode = Pi(
    t,
    o,
    a,
    c,
    f === 0 ? void 0 : f,
    u,
    g,
    !!y,
    !1,
    s,
    e.loc
  );
};
function TE(e, t, n = !1) {
  let { tag: i } = e;
  const r = fo(i), s = Mi(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (s)
    if (r || ln(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (s.type === 6 ? l = s.value && ne(s.value.content, !0) : (l = s.exp, l || (l = ne("is", !1, s.arg.loc))), l)
        return Ce(t.helper(rl), [
          l
        ]);
    } else s.type === 6 && s.value.content.startsWith("vue:") && (i = s.value.content.slice(4));
  const o = pf(i) || t.isBuiltInComponent(i);
  return o ? (n || t.helper(o), o) : (t.helper(il), t.components.add(i), Li(i, "component"));
}
function kf(e, t, n = e.props, i, r, s = !1) {
  const { tag: o, loc: l, children: a } = e;
  let c = [];
  const f = [], u = [], h = a.length > 0;
  let g = !1, y = 0, S = !1, L = !1, A = !1, v = !1, E = !1, _ = !1;
  const N = [], V = (T) => {
    c.length && (f.push(
      ot(Aa(c), l)
    ), c = []), T && f.push(T);
  }, C = () => {
    t.scopes.vFor > 0 && c.push(
      Oe(
        ne("ref_for", !0),
        ne("true")
      )
    );
  }, k = ({ key: T, value: M }) => {
    if (Ye(T)) {
      const w = T.content, H = Pt(w);
      if (H && (!i || r) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      w.toLowerCase() !== "onclick" && // omit v-model handlers
      w !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !en(w) && (v = !0), H && en(w) && (_ = !0), H && M.type === 14 && (M = M.arguments[0]), M.type === 20 || (M.type === 4 || M.type === 8) && lt(M, t) > 0)
        return;
      w === "ref" ? S = !0 : w === "class" ? L = !0 : w === "style" ? A = !0 : w !== "key" && !N.includes(w) && N.push(w), i && (w === "class" || w === "style") && !N.includes(w) && N.push(w);
    } else
      E = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const M = n[T];
    if (M.type === 6) {
      const { loc: w, name: H, nameLoc: J, value: X } = M;
      let W = !0;
      if (H === "ref" && (S = !0, C()), H === "is" && (fo(o) || X && X.content.startsWith("vue:") || ln(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Oe(
          ne(H, !0, J),
          ne(
            X ? X.content : "",
            W,
            X ? X.loc : w
          )
        )
      );
    } else {
      const { name: w, arg: H, exp: J, loc: X, modifiers: W } = M, z = w === "bind", q = w === "on";
      if (w === "slot") {
        i || t.onError(
          fe(40, X)
        );
        continue;
      }
      if (w === "once" || w === "memo" || w === "is" || z && Qt(H, "is") && (fo(o) || ln(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || q && s)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (z && Qt(H, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        q && h && Qt(H, "vue:before-update")) && (g = !0), z && Qt(H, "ref") && C(), !H && (z || q)
      ) {
        if (E = !0, J)
          if (z) {
            if (C(), V(), B.NODE_ENV !== "production" && f.some((nt) => nt.type === 15 ? nt.properties.some(({ key: it }) => it.type !== 4 || !it.isStatic ? !0 : it.content !== "class" && it.content !== "style" && !Pt(it.content)) : !0) && ei(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              X
            ), ln(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              f.unshift(J);
              continue;
            }
            f.push(J);
          } else
            V({
              type: 14,
              loc: X,
              callee: t.helper(fl),
              arguments: i ? [J] : [J, "true"]
            });
        else
          t.onError(
            fe(
              z ? 34 : 35,
              X
            )
          );
        continue;
      }
      z && W.includes("prop") && (y |= 32);
      const de = t.directiveTransforms[w];
      if (de) {
        const { props: tt, needRuntime: nt } = de(M, e, t);
        !s && tt.forEach(k), q && H && !Ye(H) ? V(ot(tt, l)) : c.push(...tt), nt && (u.push(M), Qe(nt) && xf.set(M, nt));
      } else Ba(w) || (u.push(M), h && (g = !0));
    }
  }
  let b;
  if (f.length ? (V(), f.length > 1 ? b = Ce(
    t.helper(Lr),
    f,
    l
  ) : b = f[0]) : c.length && (b = ot(
    Aa(c),
    l
  )), E ? y |= 16 : (L && !i && (y |= 2), A && !i && (y |= 4), N.length && (y |= 8), v && (y |= 32)), !g && (y === 0 || y === 32) && (S || _ || u.length > 0) && (y |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let T = -1, M = -1, w = !1;
        for (let X = 0; X < b.properties.length; X++) {
          const W = b.properties[X].key;
          Ye(W) ? W.content === "class" ? T = X : W.content === "style" && (M = X) : W.isHandlerKey || (w = !0);
        }
        const H = b.properties[T], J = b.properties[M];
        w ? b = Ce(
          t.helper(Ri),
          [b]
        ) : (H && !Ye(H.value) && (H.value = Ce(
          t.helper(cl),
          [H.value]
        )), J && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (A || J.value.type === 4 && J.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        J.value.type === 17) && (J.value = Ce(
          t.helper(ul),
          [J.value]
        )));
        break;
      case 14:
        break;
      default:
        b = Ce(
          t.helper(Ri),
          [
            Ce(t.helper(qi), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: u,
    patchFlag: y,
    dynamicPropNames: N,
    shouldUseBlock: g
  };
}
function Aa(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const s = r.key.content, o = t.get(s);
    o ? (s === "style" || s === "class" || Pt(s)) && DE(o, r) : (t.set(s, r), n.push(r));
  }
  return n;
}
function DE(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = zi(
    [e.value, t.value],
    e.loc
  );
}
function CE(e, t) {
  const n = [], i = xf.get(e);
  i ? n.push(t.helperString(i)) : (t.helper(sl), t.directives.add(e.name), n.push(Li(e.name, "directive")));
  const { loc: r } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const s = ne("true", !1, r);
    n.push(
      ot(
        e.modifiers.map(
          (o) => Oe(o, s)
        ),
        r
      )
    );
  }
  return zi(n, e.loc);
}
function VE(e) {
  let t = "[";
  for (let n = 0, i = e.length; n < i; n++)
    t += JSON.stringify(e[n]), n < i - 1 && (t += ", ");
  return t + "]";
}
function fo(e) {
  return e === "component" || e === "Component";
}
const xE = (e, t) => {
  if (Br(e)) {
    const { children: n, loc: i } = e, { slotName: r, slotProps: s } = kE(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      r,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    s && (o[2] = s, l = 3), n.length && (o[3] = Xn([], n, !1, !1, i), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = Ce(
      t.helper(af),
      o,
      i
    );
  }
};
function kE(e, t) {
  let n = '"default"', i;
  const r = [];
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = ge(o.name), r.push(o)));
    else if (o.name === "bind" && Qt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = ge(o.arg.content);
        n = o.exp = ne(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && Ye(o.arg) && (o.arg.content = ge(o.arg.content)), r.push(o);
  }
  if (r.length > 0) {
    const { props: s, directives: o } = kf(
      e,
      t,
      r,
      !1,
      !1
    );
    i = s, o.length && t.onError(
      fe(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const IE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, If = (e, t, n, i) => {
  const { loc: r, modifiers: s, arg: o } = e;
  !e.exp && !s.length && n.onError(fe(35, r));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let u = o.content;
      B.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(fe(51, o.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const h = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        yt(ge(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ne(h, !0, o.loc);
    } else
      l = mt([
        `${n.helperString(so)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(so)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = df(a.content), h = !(u || IE.test(a.content)), g = a.content.includes(";");
    B.NODE_ENV !== "production" && yn(
      a,
      n,
      !1,
      g
    ), (h || c && u) && (a = mt([
      `${h ? "$event" : "(...args)"} => ${g ? "{" : "("}`,
      a,
      g ? "}" : ")"
    ]));
  }
  let f = {
    props: [
      Oe(
        l,
        a || ne("() => {}", !1, r)
      )
    ]
  };
  return i && (f = i(f)), c && (f.props[0].value = n.cache(f.props[0].value)), f.props.forEach((u) => u.key.isHandlerKey = !0), f;
}, AE = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let i, r = !1;
      for (let s = 0; s < n.length; s++) {
        const o = n[s];
        if (Vs(o)) {
          r = !0;
          for (let l = s + 1; l < n.length; l++) {
            const a = n[l];
            if (Vs(a))
              i || (i = n[s] = mt(
                [o],
                o.loc
              )), i.children.push(" + ", a), n.splice(l, 1), l--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!r || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (s) => s.type === 7 && !t.directiveTransforms[s.name]
      ) && e.tag !== "template")))
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          if (Vs(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !t.ssr && lt(o, t) === 0 && l.push(
              1 + (B.NODE_ENV !== "production" ? ` /* ${tn[1]} */` : "")
            ), n[s] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: Ce(
                t.helper(nl),
                l
              )
            };
          }
        }
    };
}, Ra = /* @__PURE__ */ new WeakSet(), RE = (e, t) => {
  if (e.type === 1 && st(e, "once", !0))
    return Ra.has(e) || t.inVOnce || t.inSSR ? void 0 : (Ra.add(e), t.inVOnce = !0, t.helper($r), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, Af = (e, t, n) => {
  const { exp: i, arg: r } = e;
  if (!i)
    return n.onError(
      fe(41, e.loc)
    ), cr();
  const s = i.loc.source, o = i.type === 4 ? i.content : s, l = n.bindingMetadata[s];
  if (l === "props" || l === "props-aliased")
    return n.onError(fe(44, i.loc)), cr();
  if (!o.trim() || !df(o) && !!1)
    return n.onError(
      fe(42, i.loc)
    ), cr();
  const c = r || ne("modelValue", !0), f = r ? Ye(r) ? `onUpdate:${ge(r.content)}` : mt(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let u;
  const h = n.isTS ? "($event: any)" : "$event";
  u = mt([
    `${h} => ((`,
    i,
    ") = $event)"
  ]);
  const g = [
    // modelValue: foo
    Oe(c, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Oe(f, u)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const y = e.modifiers.map((L) => (gl(L) ? L : JSON.stringify(L)) + ": true").join(", "), S = r ? Ye(r) ? `${r.content}Modifiers` : mt([r, ' + "Modifiers"']) : "modelModifiers";
    g.push(
      Oe(
        S,
        ne(
          `{ ${y} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return cr(g);
};
function cr(e = []) {
  return { props: e };
}
const PE = /[\w).+\-_$\]]/, ME = (e, t) => {
  ln("COMPILER_FILTERS", t) && (e.type === 5 ? Wr(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Wr(n.exp, t);
  }));
};
function Wr(e, t) {
  if (e.type === 4)
    Pa(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      typeof i == "object" && (i.type === 4 ? Pa(i, t) : i.type === 8 ? Wr(e, t) : i.type === 5 && Wr(i.content, t));
    }
}
function Pa(e, t) {
  const n = e.content;
  let i = !1, r = !1, s = !1, o = !1, l = 0, a = 0, c = 0, f = 0, u, h, g, y, S = [];
  for (g = 0; g < n.length; g++)
    if (h = u, u = n.charCodeAt(g), i)
      u === 39 && h !== 92 && (i = !1);
    else if (r)
      u === 34 && h !== 92 && (r = !1);
    else if (s)
      u === 96 && h !== 92 && (s = !1);
    else if (o)
      u === 47 && h !== 92 && (o = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(g + 1) !== 124 && n.charCodeAt(g - 1) !== 124 && !l && !a && !c)
      y === void 0 ? (f = g + 1, y = n.slice(0, g).trim()) : L();
    else {
      switch (u) {
        case 34:
          r = !0;
          break;
        case 39:
          i = !0;
          break;
        case 96:
          s = !0;
          break;
        case 40:
          c++;
          break;
        case 41:
          c--;
          break;
        case 91:
          a++;
          break;
        case 93:
          a--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (u === 47) {
        let A = g - 1, v;
        for (; A >= 0 && (v = n.charAt(A), v === " "); A--)
          ;
        (!v || !PE.test(v)) && (o = !0);
      }
    }
  y === void 0 ? y = n.slice(0, g).trim() : f !== 0 && L();
  function L() {
    S.push(n.slice(f, g).trim()), f = g + 1;
  }
  if (S.length) {
    for (B.NODE_ENV !== "production" && Hr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), g = 0; g < S.length; g++)
      y = LE(y, S[g], t);
    e.content = y, e.ast = void 0;
  }
}
function LE(e, t, n) {
  n.helper(ol);
  const i = t.indexOf("(");
  if (i < 0)
    return n.filters.add(t), `${Li(t, "filter")}(${e})`;
  {
    const r = t.slice(0, i), s = t.slice(i + 1);
    return n.filters.add(r), `${Li(r, "filter")}(${e}${s !== ")" ? "," + s : s}`;
  }
}
const Ma = /* @__PURE__ */ new WeakSet(), $E = (e, t) => {
  if (e.type === 1) {
    const n = st(e, "memo");
    return !n || Ma.has(e) ? void 0 : (Ma.add(e), () => {
      const i = e.codegenNode || t.currentNode.codegenNode;
      i && i.type === 13 && (e.tagType !== 1 && hl(i, t), e.codegenNode = Ce(t.helper(dl), [
        n.exp,
        Xn(void 0, i),
        "_cache",
        String(t.cached++)
      ]));
    });
  }
};
function FE(e) {
  return [
    [
      RE,
      hE,
      $E,
      _E,
      ME,
      ...B.NODE_ENV !== "production" ? [dE] : [],
      xE,
      wE,
      vE,
      AE
    ],
    {
      on: If,
      bind: yE,
      model: Af
    }
  ];
}
function HE(e, t = {}) {
  const n = t.onError || ml, i = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(fe(47)) : i && n(fe(48));
  const r = !1;
  t.cacheHandlers && n(fe(49)), t.scopeId && !i && n(fe(50));
  const s = ie({}, t, {
    prefixIdentifiers: r
  }), o = Q(e) ? Ug(e, s) : e, [l, a] = FE();
  return Wg(
    o,
    ie({}, s, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: ie(
        {},
        a,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Yg(o, s);
}
const UE = () => ({ props: [] });
var Ue = {};
const Rf = Symbol(Ue.NODE_ENV !== "production" ? "vModelRadio" : ""), Pf = Symbol(Ue.NODE_ENV !== "production" ? "vModelCheckbox" : ""), Mf = Symbol(Ue.NODE_ENV !== "production" ? "vModelText" : ""), Lf = Symbol(Ue.NODE_ENV !== "production" ? "vModelSelect" : ""), po = Symbol(Ue.NODE_ENV !== "production" ? "vModelDynamic" : ""), $f = Symbol(Ue.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""), Ff = Symbol(Ue.NODE_ENV !== "production" ? "vOnKeysGuard" : ""), Hf = Symbol(Ue.NODE_ENV !== "production" ? "vShow" : ""), yl = Symbol(Ue.NODE_ENV !== "production" ? "Transition" : ""), Uf = Symbol(Ue.NODE_ENV !== "production" ? "TransitionGroup" : "");
dg({
  [Rf]: "vModelRadio",
  [Pf]: "vModelCheckbox",
  [Mf]: "vModelText",
  [Lf]: "vModelSelect",
  [po]: "vModelDynamic",
  [$f]: "withModifiers",
  [Ff]: "withKeys",
  [Hf]: "vShow",
  [yl]: "Transition",
  [Uf]: "TransitionGroup"
});
let $n;
function BE(e, t = !1) {
  return $n || ($n = document.createElement("div")), t ? ($n.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, $n.children[0].getAttribute("foo")) : ($n.innerHTML = e, $n.textContent);
}
const jE = {
  parseMode: "html",
  isVoidTag: hp,
  isNativeTag: (e) => Ka(e) || Wa(e) || qa(e),
  isPreTag: (e) => e === "pre",
  decodeEntities: BE,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return yl;
    if (e === "TransitionGroup" || e === "transition-group")
      return Uf;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let i = t ? t.ns : n;
    if (t && i === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (r) => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")
        ) && (i = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
    else t && i === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (i = 0);
    if (i === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return i;
  }
}, KE = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ne("style", !0, t.loc),
      exp: WE(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, WE = (e, t) => {
  const n = ja(e);
  return ne(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function ht(e, t) {
  return fe(
    e,
    t,
    Ue.NODE_ENV !== "production" ? qE : void 0
  );
}
const qE = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, zE = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ht(53, r)
  ), t.children.length && (n.onError(
    ht(54, r)
  ), t.children.length = 0), {
    props: [
      Oe(
        ne("innerHTML", !0, r),
        i || ne("", !0)
      )
    ]
  };
}, GE = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ht(55, r)
  ), t.children.length && (n.onError(
    ht(56, r)
  ), t.children.length = 0), {
    props: [
      Oe(
        ne("textContent", !0),
        i ? lt(i, n) > 0 ? i : Ce(
          n.helperString(fs),
          [i],
          r
        ) : ne("", !0)
      )
    ]
  };
}, YE = (e, t, n) => {
  const i = Af(e, t, n);
  if (!i.props.length || t.tagType === 1)
    return i;
  e.arg && n.onError(
    ht(
      58,
      e.arg.loc
    )
  );
  function r() {
    const l = st(t, "bind");
    l && Qt(l.arg, "value") && n.onError(
      ht(
        60,
        l.loc
      )
    );
  }
  const { tag: s } = t, o = n.isCustomElement(s);
  if (s === "input" || s === "textarea" || s === "select" || o) {
    let l = Mf, a = !1;
    if (s === "input" || o) {
      const c = Mi(t, "type");
      if (c) {
        if (c.type === 7)
          l = po;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              l = Rf;
              break;
            case "checkbox":
              l = Pf;
              break;
            case "file":
              a = !0, n.onError(
                ht(
                  59,
                  e.loc
                )
              );
              break;
            default:
              Ue.NODE_ENV !== "production" && r();
              break;
          }
      } else wg(t) ? l = po : Ue.NODE_ENV !== "production" && r();
    } else s === "select" ? l = Lf : Ue.NODE_ENV !== "production" && r();
    a || (i.needRuntime = n.helper(l));
  } else
    n.onError(
      ht(
        57,
        e.loc
      )
    );
  return i.props = i.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), i;
}, JE = /* @__PURE__ */ Ie("passive,once,capture"), XE = /* @__PURE__ */ Ie(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), ZE = /* @__PURE__ */ Ie("left,right"), Bf = /* @__PURE__ */ Ie(
  "onkeyup,onkeydown,onkeypress",
  !0
), QE = (e, t, n, i) => {
  const r = [], s = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    a === "native" && ei(
      "COMPILER_V_ON_NATIVE",
      n,
      i
    ) || JE(a) ? o.push(a) : ZE(a) ? Ye(e) ? Bf(e.content) ? r.push(a) : s.push(a) : (r.push(a), s.push(a)) : XE(a) ? s.push(a) : r.push(a);
  }
  return {
    keyModifiers: r,
    nonKeyModifiers: s,
    eventOptionModifiers: o
  };
}, La = (e, t) => Ye(e) && e.content.toLowerCase() === "onclick" ? ne(t, !0) : e.type !== 4 ? mt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, ey = (e, t, n) => If(e, t, n, (i) => {
  const { modifiers: r } = e;
  if (!r.length) return i;
  let { key: s, value: o } = i.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = QE(s, r, n, e.loc);
  if (a.includes("right") && (s = La(s, "onContextmenu")), a.includes("middle") && (s = La(s, "onMouseup")), a.length && (o = Ce(n.helper($f), [
    o,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!Ye(s) || Bf(s.content)) && (o = Ce(n.helper(Ff), [
    o,
    JSON.stringify(l)
  ])), c.length) {
    const f = c.map(Ot).join("");
    s = Ye(s) ? ne(`${s.content}${f}`, !0) : mt(["(", s, `) + "${f}"`]);
  }
  return {
    props: [Oe(s, o)]
  };
}), ty = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ht(61, r)
  ), {
    props: [],
    needRuntime: n.helper(Hf)
  };
}, ny = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === yl)
    return () => {
      if (!e.children.length)
        return;
      jf(e) && t.onError(
        ht(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const i = e.children[0];
      if (i.type === 1)
        for (const r of i.props)
          r.type === 7 && r.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function jf(e) {
  const t = e.children = e.children.filter(
    (i) => i.type !== 3 && !(i.type === 2 && !i.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(jf);
}
const iy = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (Ue.NODE_ENV !== "production" && t.onError(
    ht(
      63,
      e.loc
    )
  ), t.removeNode());
}, ry = [
  KE,
  ...Ue.NODE_ENV !== "production" ? [ny] : []
], sy = {
  cloak: UE,
  html: zE,
  text: GE,
  model: YE,
  // override compiler-core
  on: ey,
  // override compiler-core
  show: ty
};
function oy(e, t = {}) {
  return HE(
    e,
    ie({}, jE, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        iy,
        ...ry,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: ie(
        {},
        sy,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var hi = {};
function ly() {
  Iu();
}
hi.NODE_ENV !== "production" && ly();
const $a = /* @__PURE__ */ new WeakMap();
function ay(e) {
  let t = $a.get(e ?? oe);
  return t || (t = /* @__PURE__ */ Object.create(null), $a.set(e ?? oe, t)), t;
}
function cy(e, t) {
  if (!Q(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return hi.NODE_ENV !== "production" && Ve("invalid template option: ", e), pe;
  const n = e, i = ay(t), r = i[n];
  if (r)
    return r;
  if (e[0] === "#") {
    const c = document.querySelector(e);
    hi.NODE_ENV !== "production" && !c && Ve(`Template element not found or is empty: ${e}`), e = c ? c.innerHTML : "";
  }
  const s = ie(
    {
      hoistStatic: !0,
      onError: hi.NODE_ENV !== "production" ? l : void 0,
      onWarn: hi.NODE_ENV !== "production" ? (c) => l(c, !0) : pe
    },
    t
  );
  !s.isCustomElement && typeof customElements < "u" && (s.isCustomElement = (c) => !!customElements.get(c));
  const { code: o } = oy(e, s);
  function l(c, f = !1) {
    const u = f ? c.message : `Template compilation error: ${c.message}`, h = c.loc && rp(
      e,
      c.loc.start.offset,
      c.loc.end.offset
    );
    Ve(h ? `${u}
${h}` : u);
  }
  const a = new Function("Vue", o)(lg);
  return a._rc = !0, i[n] = a;
}
Tu(cy);
class uy {
  constructor(t, n = "state_acephale") {
    Ut(this, "state");
    Ut(this, "trySetFromLocalStorage", () => {
      const t = localStorage.getItem(this.key);
      if (t !== null) {
        const n = JSON.parse(t);
        Object.assign(this.state, n);
      }
    });
    this.key = n, this.key = n, this.state = Rn(t), this.sync(), this.watchPersistence();
  }
  sync() {
    this.trySetFromLocalStorage(), window.addEventListener("focus", this.trySetFromLocalStorage);
  }
  watchPersistence() {
    Cn(this.state, (t) => {
      this.saveToLocalStorage(this.key, t);
    });
  }
  saveToLocalStorage(t, n) {
    localStorage.setItem(t, JSON.stringify(n));
  }
}
function fy(e, t) {
  return Number.isInteger(Number.parseInt(e)) ? Number.parseInt(e) : t;
}
function Kf(e) {
  const t = document.getElementsByTagName("head")[0];
  if (!t)
    return;
  const n = document.createElement("style");
  n.type = "text/css", n.innerHTML = e.replace(/;/g, " !important;"), t.appendChild(n);
}
function py(e) {
  const t = new DOMParser().parseFromString(e, "text/html").body;
  return t.children.length > 1 ? t : t.firstElementChild;
}
const Fn = {
  EXCLUDE: {
    filterExclude: { value: !1, persistent: !0, watch: !0 },
    filterExcludeWords: { value: "", persistent: !0, watch: "filterExclude" }
  },
  INCLUDE: {
    filterInclude: { value: !1, persistent: !0, watch: !0 },
    filterIncludeWords: { value: "", persistent: !0, watch: "filterInclude" }
  },
  MISC: {
    infiniteScrollEnabled: { value: !0, persistent: !0, watch: !0 },
    uiEnabled: { value: !0, persistent: !0, watch: !0 }
  },
  DURATION_FILTER: {
    filterDuration: { value: !1, persistent: !0, watch: !0 },
    filterDurationFrom: { value: 0, type: "number", persistent: !0, watch: "filterDuration" },
    filterDurationTo: { value: 600, type: "number", persistent: !0, watch: "filterDuration" }
  },
  PRIVACY_FILTER: {
    filterPrivate: { value: !1, persistent: !0, watch: !0 },
    filterPublic: { value: !1, persistent: !0, watch: !0 }
  },
  PAGINATION: {
    pagIndexLast: { value: 1, persistent: !1, watch: !0 },
    pagIndexCur: { value: 1, persistent: !1, watch: !0 }
  }
}, Wf = Object.assign({}, Fn.EXCLUDE, Fn.INCLUDE, Fn.MISC, Fn.PAGINATION), dy = Object.assign({}, Wf, Fn.DURATION_FILTER), yy = Object.assign({}, dy, Fn.PRIVACY_FILTER);
class _y {
  constructor(t = Wf) {
    Ut(this, "callbacks", []);
    Ut(this, "state");
    Ut(this, "stateLocale");
    Ut(this, "parseState", (t) => {
      const n = {}, i = {};
      Object.entries(t).forEach(([r, s]) => {
        (s.persistent ? n : i)[r] = s.value;
      }), Object.assign(this, {
        state: new uy(n).state,
        stateLocale: Rn(i)
      }), Object.entries(t).forEach(([r, s]) => {
        if (!s.watch) return;
        const o = s.persistent ? this.state : this.stateLocale;
        Cn(() => o[r], (l, a) => {
          s.type === "number" && (o[r] = fy(l, a));
          const c = typeof s.watch == "boolean";
          if (c || o[s.watch]) {
            const f = c ? r : s.watch;
            this.notify({ [f]: o[f] });
          }
        }, { deep: !0 });
      });
    });
    this.parseState(t);
  }
  subscribe(t) {
    this.callbacks.push(t);
  }
  notify(t) {
    this.callbacks.forEach((n) => n(t));
  }
}
const qf = {
  excludeFilter: [
    { type: "checkbox", model: "state.filterExclude", label: "exclude" },
    { type: "text", model: "state.filterExcludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  includeFilter: [
    { type: "checkbox", model: "state.filterInclude", label: "include" },
    { type: "text", model: "state.filterIncludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  infiniteScroll: [
    { type: "checkbox", model: "state.infiniteScrollEnabled", label: "infinite scroll" },
    { type: "span", innerText: "{{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}", "v-if": "stateLocale.pagIndexLast > 1" }
  ],
  durationFilter: [
    { type: "checkbox", model: "state.filterDuration", label: "duration" },
    { type: "number", model: "state.filterDurationFrom", step: "10", min: "0", max: "72000", labelBefore: "from" },
    { type: "number", model: "state.filterDurationTo", step: "10", min: "0", max: "72000", labelBefore: "to" }
  ]
}, hy = (e) => Object.entries(qf).reduce((t, [n, i], r) => (r === 2 && Object.assign(t, e), Object.assign(t, { [n]: i }), t), {}), by = hy({
  privateFilter: [
    { type: "checkbox", model: "state.filterPrivate", label: "private" },
    { type: "checkbox", model: "state.filterPublic", label: "public" }
  ]
}), my = '#tapermonkey-app *,#tapermonkey-app :before,#tapermonkey-app :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}#tapermonkey-app :before,#tapermonkey-app :after{--tw-content: ""}#tapermonkey-app html,#tapermonkey-app :host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}#tapermonkey-app body{margin:0;line-height:inherit}#tapermonkey-app hr{height:0;color:inherit;border-top-width:1px}#tapermonkey-app abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}#tapermonkey-app h1,#tapermonkey-app h2,#tapermonkey-app h3,#tapermonkey-app h4,#tapermonkey-app h5,#tapermonkey-app h6{font-size:inherit;font-weight:inherit}#tapermonkey-app a{color:inherit;text-decoration:inherit}#tapermonkey-app b,#tapermonkey-app strong{font-weight:bolder}#tapermonkey-app code,#tapermonkey-app kbd,#tapermonkey-app samp,#tapermonkey-app pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}#tapermonkey-app small{font-size:80%}#tapermonkey-app sub,#tapermonkey-app sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}#tapermonkey-app sub{bottom:-.25em}#tapermonkey-app sup{top:-.5em}#tapermonkey-app table{text-indent:0;border-color:inherit;border-collapse:collapse}#tapermonkey-app button,#tapermonkey-app input,#tapermonkey-app optgroup,#tapermonkey-app select,#tapermonkey-app textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}#tapermonkey-app button,#tapermonkey-app select{text-transform:none}#tapermonkey-app button,#tapermonkey-app input:where([type=button]),#tapermonkey-app input:where([type=reset]),#tapermonkey-app input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}#tapermonkey-app :-moz-focusring{outline:auto}#tapermonkey-app :-moz-ui-invalid{box-shadow:none}#tapermonkey-app progress{vertical-align:baseline}#tapermonkey-app ::-webkit-inner-spin-button,#tapermonkey-app ::-webkit-outer-spin-button{height:auto}#tapermonkey-app [type=search]{-webkit-appearance:textfield;outline-offset:-2px}#tapermonkey-app ::-webkit-search-decoration{-webkit-appearance:none}#tapermonkey-app ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}#tapermonkey-app summary{display:list-item}#tapermonkey-app blockquote,#tapermonkey-app dl,#tapermonkey-app dd,#tapermonkey-app h1,#tapermonkey-app h2,#tapermonkey-app h3,#tapermonkey-app h4,#tapermonkey-app h5,#tapermonkey-app h6,#tapermonkey-app hr,#tapermonkey-app figure,#tapermonkey-app p,#tapermonkey-app pre{margin:0}#tapermonkey-app fieldset{margin:0;padding:0}#tapermonkey-app legend{padding:0}#tapermonkey-app ol,#tapermonkey-app ul,#tapermonkey-app menu{list-style:none;margin:0;padding:0}#tapermonkey-app dialog{padding:0}#tapermonkey-app textarea{resize:vertical}#tapermonkey-app input::-moz-placeholder,#tapermonkey-app textarea::-moz-placeholder{opacity:1;color:#9ca3af}#tapermonkey-app input::placeholder,#tapermonkey-app textarea::placeholder{opacity:1;color:#9ca3af}#tapermonkey-app button,#tapermonkey-app [role=button]{cursor:pointer}#tapermonkey-app :disabled{cursor:default}#tapermonkey-app img,#tapermonkey-app svg,#tapermonkey-app video,#tapermonkey-app canvas,#tapermonkey-app audio,#tapermonkey-app iframe,#tapermonkey-app embed,#tapermonkey-app object{display:block;vertical-align:middle}#tapermonkey-app img,#tapermonkey-app video{max-width:100%;height:auto}#tapermonkey-app [hidden]{display:none}#tapermonkey-app *,#tapermonkey-app :before,#tapermonkey-app :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }#tapermonkey-app ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }#tapermonkey-app .fixed{position:fixed}#tapermonkey-app .bottom-0{bottom:0}#tapermonkey-app .right-0{right:0}#tapermonkey-app .m-1{margin:.25rem}#tapermonkey-app .m-2{margin:.5rem}#tapermonkey-app .m-auto{margin:auto}#tapermonkey-app .mx-2{margin-left:.5rem;margin-right:.5rem}#tapermonkey-app .ml-2{margin-left:.5rem}#tapermonkey-app .ml-auto{margin-left:auto}#tapermonkey-app .mr-2{margin-right:.5rem}#tapermonkey-app .mr-4{margin-right:1rem}#tapermonkey-app .inline-block{display:inline-block}#tapermonkey-app .flex{display:flex}#tapermonkey-app .hidden{display:none}#tapermonkey-app .size-auto{width:auto;height:auto}#tapermonkey-app .h-7{height:1.75rem}#tapermonkey-app .h-8{height:2rem}#tapermonkey-app .w-24{width:6rem}#tapermonkey-app .w-7{width:1.75rem}#tapermonkey-app .w-full{width:100%}#tapermonkey-app .max-w-full{max-width:100%}#tapermonkey-app .cursor-pointer{cursor:pointer}#tapermonkey-app .items-center{align-items:center}#tapermonkey-app .rounded{border-radius:.25rem}#tapermonkey-app .rounded-sm{border-radius:.125rem}#tapermonkey-app .bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-700{--tw-bg-opacity: 1;background-color:rgb(63 63 70 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-800{--tw-bg-opacity: 1;background-color:rgb(39 39 42 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-900{--tw-bg-opacity: 1;background-color:rgb(24 24 27 / var(--tw-bg-opacity))}#tapermonkey-app .fill-gray-600{fill:#4b5563}#tapermonkey-app .stroke-gray-400{stroke:#9ca3af}#tapermonkey-app .p-2{padding:.5rem}#tapermonkey-app .px-2{padding-left:.5rem;padding-right:.5rem}#tapermonkey-app .px-3{padding-left:.75rem;padding-right:.75rem}#tapermonkey-app .py-1{padding-top:.25rem;padding-bottom:.25rem}#tapermonkey-app .py-2{padding-top:.5rem;padding-bottom:.5rem}#tapermonkey-app .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}#tapermonkey-app .text-zinc-300{--tw-text-opacity: 1;color:rgb(212 212 216 / var(--tw-text-opacity))}#tapermonkey-app .accent-gray-700{accent-color:#374151}#tapermonkey-app .outline-none{outline:2px solid transparent;outline-offset:2px}#tapermonkey-app .invert{--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.checked:invert-0:checked{--tw-invert: invert(0);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover:bg-gray-600:hover{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.hover:bg-zinc-600:hover{--tw-bg-opacity: 1;background-color:rgb(82 82 91 / var(--tw-bg-opacity))}.hover:bg-zinc-900:hover{--tw-bg-opacity: 1;background-color:rgb(24 24 27 / var(--tw-bg-opacity))}.focus:outline-gray-600:focus{outline-color:#4b5563}';
Kf(my);
Kf(`
      #tapermonkey-app .flex.items-center:first-child:hover { background: #3741512b; }
      #tapermonkey-app input[type="text"]:hover { background: #52525b; }
      #tapermonkey-app input[type="number"]:hover { background: #4b5563; }
      #tapermonkey-app button:hover { background: #4b5563; }`);
const ur = {
  container: "flex items-center bg-zinc-900 py-2 px-2 m-1 font-mono rounded",
  text: "w-full h-8 text-zinc-300 px-3 py-2 mx-2 rounded-sm bg-zinc-700 outline-none focus:outline-gray-600 hover:bg-zinc-600",
  checkbox: "mx-2 size-auto invert checked:invert-0 accent-gray-700",
  number: "w-24 h-8 text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 outline-none focus:outline-gray-600",
  button: "mx-2 size-auto text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 ml-auto",
  span: "text-zinc-300 ml-auto mr-4",
  label: "text-zinc-300 flex font-mono",
  labelBefore: "text-zinc-300 mx-2 font-mono"
};
function gy(e) {
  const t = {}, n = ({ type: r, model: s, innerText: o, label: l, labelBefore: a, callback: c, ...f }) => {
    if (r === "button" && !c) return "";
    const u = /checkbox|text|number/.test(r), h = u ? "input" : r, g = u ? s : (Math.random() * 1e7 | 0).toString(16), y = {
      id: g,
      "v-model": u ? s : "",
      type: u ? r : "",
      "@click": c ? `cb${g}` : "",
      class: ur[r],
      ...f
    };
    c && (y[":style"] = `{ backgroundColor: cbState.cb${g} ? 'blue' : '' }`), c && (t[`cb${g}`] = c);
    const S = Object.entries(y).filter(([v, E]) => E).map(([v, E]) => `${v}="${E}"`).join(" "), L = `<${h} ${S}>${o || ""}${u ? "" : `</${h}>`}`;
    let A = L;
    if (l || a) {
      const v = `<label for="${y.id}" class="${a ? ur.labelBefore : ur.label}">${l || a}</label>`;
      A = (a ? [v, L] : [L, v]).join(`
`);
    }
    return A;
  };
  return { parsedScheme: Object.values(e).map((r) => {
    const s = r.map((o) => n(o)).join(`
`);
    return `<div class="${ur.container}">${s}</div>`;
  }).join(`
`), callbacks: t };
}
class Ny {
  constructor({ state: t, stateLocale: n }, i = qf) {
    Ut(this, "template", (t) => `
  <div class="fixed bottom-0 right-0 z-9999 rounded bg-zinc-800 max-w-full p-2 m-2"
    :class="state.hidden ? 'hover:bg-gray-600' : ''" v-if="state.uiEnabled">

    <div class="flex items-center cursor-pointer py-1 px-2 m-1 rounded"
      :class="!state.hidden ? 'hover:bg-zinc-900' : ''" @click="state.hidden = !state.hidden">
      <span class="m-auto flex mono">
        <span v-if="state.hidden && stateLocale.pagIndexLast > 1" class="px-3 py-2 mr-2 bg-gray-700 text-zinc-300 font-mono rounded ">
          {{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}
        </span>
        <svg v-if="state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
        <svg v-if="!state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </span>
    </div>

    <template v-if="!state.hidden">${t}</template>
  </div>`);
    const r = py('<div id="tapermonkey-app" style="position: relative; z-index: 999999;"></div>');
    document.body.appendChild(r);
    const { parsedScheme: s, callbacks: o } = gy(i), l = this.template(s);
    Zu({
      setup: () => {
        const c = Rn(Object.keys(o).reduce(
          (f, u) => (f[u] = !1, f),
          {}
        ));
        return Object.entries(o).forEach(([f, u]) => {
          o[f] = async () => {
            await u(), c[f] = !0;
          };
        }), { state: t, stateLocale: n, ...o, cbState: c };
      },
      template: l
    }).mount("#tapermonkey-app");
  }
}
export {
  qf as DefaultScheme,
  _y as JabroniOutfitStore,
  Ny as JabroniOutfitUI,
  by as defaultSchemeWithPrivateFilter,
  Wf as defaultStateInclExclMiscPagination,
  dy as defaultStateWithDuration,
  yy as defaultStateWithDurationAndPrivacy,
  hy as extendDefaultScheme
};
