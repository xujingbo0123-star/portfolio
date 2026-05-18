import{F as e,L as t,M as n,Vt as r,Z as i,_ as a,d as o,f as s,g as c,i as l,l as u,ot as d,p as f,u as p,z as m}from"./runtime-core.esm-bundler-Bf1CjvHQ.js";import{a as h,i as g,n as _,r as v,t as y}from"./index-uPM2JSKc.js";import{l as b,n as x,t as S}from"./mock-BC0Sq1kA.js";var C={class:`assign-detail`},w={class:`page-header`},T={class:`title`},E={class:`card-box`,style:{"margin-bottom":`20px`}},D={class:`toolbar`},O={class:`card-box`},k={class:`print-area`,id:`printArea`},A={class:`print-label-qr`},j={class:`print-qr-placeholder`},M={class:`print-label-info`},N={class:`print-info-row`},ee={class:`print-info-row`},P={class:`print-info-row`},F={class:`print-info-row`},I=y({__name:`detail`,setup(y){let I=_(),L=v(),R=d(!1),z=d([]),B=d({}),V=d([]),H=Number(I.params.id),U=e=>e.deviceName&&e.serialNo&&e.nationalId,W=u(()=>S.filter(e=>e.taskId===H)),G=u(()=>B.value.status===`completed`),K=u(()=>W.value.every(e=>U(e)));n(()=>{B.value=x.find(e=>e.id===H)||{}});let q=e=>{V.value=e},J=()=>{h.success(`导出成功`)},Y=()=>{R.value=!0},X=e=>{z.value=W.value.slice(0,3).map(e=>({deviceName:e.deviceName,serialNo:`SN${Date.now()}${Math.random().toString().slice(2,6)}`,nationalId:`GB${Date.now()}${Math.random().toString().slice(2,6)}`}))},Z=()=>{z.value.forEach(e=>{let t=W.value.find(t=>t.deviceName===e.deviceName);t&&(t.serialNo=e.serialNo,t.nationalId=e.nationalId)}),R.value=!1,h.success(`已导入数据`)},Q=()=>{h.success(`草稿保存成功`)},te=()=>{g.confirm(`确认提交分配？提交后设备将进入派出所库存，不可再修改。`,`确认提交`,{confirmButtonText:`确认提交`,cancelButtonText:`取消`,type:`warning`}).then(()=>{W.value.forEach(e=>{b.push({id:Date.now()+Math.random(),serialNo:e.serialNo,nationalId:e.nationalId,deviceName:e.deviceName,brand:e.brand,model:e.model,org:B.value.targetOrg,status:`station_stock`,bindType:`none`,bindPerson:``,warrantyDate:e.warrantyDate,stockInDate:B.value.createTime?.slice(0,10)||new Date().toISOString().slice(0,10),source:`city_assigned`})});let e=x.find(e=>e.id===H);e&&(e.status=`completed`,e.completeTime=new Date().toISOString().slice(0,19).replace(`T`,` `)),h.success(`分配完成，设备已进入派出所库存`),L.push(`/recorder/assign`)}).catch(()=>{})},ne=()=>{if(V.value.length===0){h.warning(`请先选择要打印的设备`);return}let e=window.open(``,``,`width=800,height=600`),t=V.value.map(e=>`
    <div class="print-label">
      <div class="print-label-header">记录仪设备标签</div>
      <div class="print-label-qr">
        <div class="print-qr-placeholder">${e.serialNo}</div>
      </div>
      <div class="print-label-info">
        <div class="print-info-row"><span>序列号</span><span>${e.serialNo}</span></div>
        <div class="print-info-row"><span>设备名称</span><span>${e.deviceName}</span></div>
        <div class="print-info-row"><span>所属单位</span><span>${B.value.targetOrg}</span></div>
        <div class="print-info-row"><span>品牌型号</span><span>${e.brand} ${e.model}</span></div>
      </div>
    </div>
  `).join(``);e.document.write(`
    <html>
    <head>
      <title>设备标签打印</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { padding: 10mm; }
        .print-label {
          width: 60mm;
          height: 40mm;
          border: 1px solid #333;
          padding: 3mm;
          margin: 3mm;
          display: inline-block;
          page-break-inside: avoid;
          font-family: SimSun, sans-serif;
        }
        .print-label-header {
          text-align: center;
          font-size: 12pt;
          font-weight: bold;
          border-bottom: 1px solid #333;
          padding-bottom: 2mm;
          margin-bottom: 2mm;
        }
        .print-label-qr {
          float: left;
          width: 18mm;
          height: 18mm;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 3mm;
        }
        .print-qr-placeholder {
          font-size: 6pt;
          text-align: center;
          word-break: break-all;
        }
        .print-label-info {
          font-size: 9pt;
          line-height: 1.6;
        }
        .print-info-row {
          display: flex;
        }
        .print-info-row span:first-child {
          width: 14mm;
          color: #666;
        }
        @media print {
          body { padding: 0; }
          .print-label { border: 1px solid #000; }
        }
      </style>
    </head>
    <body>${t}</body>
    </html>
  `),e.document.close(),e.print(),e.close()};return(n,u)=>{let d=m(`el-page-header`),h=m(`el-descriptions-item`),g=m(`el-tag`),_=m(`el-descriptions`),v=m(`Download`),y=m(`el-icon`),b=m(`el-button`),x=m(`Printer`),S=m(`Upload`),I=m(`Document`),L=m(`Check`),z=m(`el-table-column`),H=m(`el-table`),$=m(`el-input`),re=m(`el-alert`),ie=m(`UploadFilled`),ae=m(`el-upload`),oe=m(`el-dialog`);return e(),f(`div`,C,[p(`div`,w,[a(d,{onBack:u[0]||=e=>n.$router.back()},{content:i(()=>[p(`span`,T,r(G.value?`分配明细`:`登记明细`),1)]),_:1})]),p(`div`,E,[a(_,{column:4,border:``},{default:i(()=>[a(h,{label:`目标派出所`},{default:i(()=>[c(r(B.value.targetOrg),1)]),_:1}),a(h,{label:`分配数量`},{default:i(()=>[c(r(B.value.totalCount)+`台`,1)]),_:1}),a(h,{label:`分配状态`},{default:i(()=>[a(g,{type:G.value?`success`:`warning`,size:`small`},{default:i(()=>[c(r(G.value?`已完成`:`待分配`),1)]),_:1},8,[`type`])]),_:1}),a(h,{label:`创建时间`},{default:i(()=>[c(r(B.value.createTime),1)]),_:1}),G.value?(e(),o(h,{key:0,label:`完成时间`},{default:i(()=>[c(r(B.value.completeTime),1)]),_:1})):s(``,!0)]),_:1})]),p(`div`,D,[a(b,{type:`primary`,onClick:J},{default:i(()=>[a(y,null,{default:i(()=>[a(v)]),_:1}),u[3]||=c(`导出 `,-1)]),_:1}),G.value?(e(),o(b,{key:0,type:`warning`,onClick:ne,disabled:V.value.length===0},{default:i(()=>[a(y,null,{default:i(()=>[a(x)]),_:1}),c(`打印标签 (`+r(V.value.length)+`台) `,1)]),_:1},8,[`disabled`])):s(``,!0),G.value?s(``,!0):(e(),f(l,{key:1},[a(b,{type:`success`,onClick:Y},{default:i(()=>[a(y,null,{default:i(()=>[a(S)]),_:1}),u[4]||=c(`导入数据 `,-1)]),_:1}),a(b,{type:`info`,onClick:Q},{default:i(()=>[a(y,null,{default:i(()=>[a(I)]),_:1}),u[5]||=c(`保存草稿 `,-1)]),_:1}),a(b,{type:`primary`,onClick:te,disabled:!K.value},{default:i(()=>[a(y,null,{default:i(()=>[a(L)]),_:1}),u[6]||=c(`提交分配 `,-1)]),_:1},8,[`disabled`])],64))]),p(`div`,O,[G.value?(e(),o(H,{key:0,data:W.value,stripe:``,onSelectionChange:q},{default:i(()=>[a(z,{type:`selection`,width:`50`}),a(z,{prop:`brand`,label:`品牌`,"min-width":`80`}),a(z,{prop:`model`,label:`型号`,"min-width":`100`}),a(z,{prop:`deviceName`,label:`设备名称`,"min-width":`140`}),a(z,{prop:`serialNo`,label:`序列号`,"min-width":`120`}),a(z,{prop:`nationalId`,label:`国标ID`,"min-width":`120`})]),_:1},8,[`data`])):(e(),o(H,{key:1,data:W.value,stripe:``},{default:i(()=>[a(z,{prop:`brand`,label:`品牌`,"min-width":`80`}),a(z,{prop:`model`,label:`型号`,"min-width":`100`}),a(z,{label:`设备名称`,"min-width":`160`},{default:i(({row:e})=>[a($,{modelValue:e.deviceName,"onUpdate:modelValue":t=>e.deviceName=t,placeholder:`请输入设备名称`},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:1}),a(z,{label:`序列号`,"min-width":`160`},{default:i(({row:e})=>[a($,{modelValue:e.serialNo,"onUpdate:modelValue":t=>e.serialNo=t,placeholder:`请输入序列号`},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:1}),a(z,{label:`国标ID`,"min-width":`160`},{default:i(({row:e})=>[a($,{modelValue:e.nationalId,"onUpdate:modelValue":t=>e.nationalId=t,placeholder:`请输入国标ID`},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:1}),a(z,{label:`状态`,"min-width":`80`},{default:i(({row:e})=>[a(g,{type:U(e)?`success`:`info`,size:`small`},{default:i(()=>[c(r(U(e)?`已填写`:`未填写`),1)]),_:2},1032,[`type`])]),_:1})]),_:1},8,[`data`]))]),a(oe,{modelValue:R.value,"onUpdate:modelValue":u[2]||=e=>R.value=e,title:`导入数据`,width:`500px`},{footer:i(()=>[a(b,{onClick:u[1]||=e=>R.value=!1},{default:i(()=>[...u[9]||=[c(`取消`,-1)]]),_:1}),a(b,{type:`primary`,onClick:Z},{default:i(()=>[...u[10]||=[c(`确认导入`,-1)]]),_:1})]),default:i(()=>[a(re,{type:`info`,closable:!1,style:{"margin-bottom":`15px`}},{title:i(()=>[...u[7]||=[p(`p`,null,`Excel模板字段：设备名称、序列号、国标ID`,-1)]]),_:1}),a(ae,{drag:``,action:`#`,"auto-upload":!1,"on-change":X,accept:`.xlsx,.xls`},{default:i(()=>[a(y,{class:`el-icon--upload`},{default:i(()=>[a(ie)]),_:1}),u[8]||=p(`div`,{class:`el-upload__text`},[c(`将文件拖到此处，或`),p(`em`,null,`点击上传`)],-1)]),_:1})]),_:1},8,[`modelValue`]),p(`div`,k,[(e(!0),f(l,null,t(V.value,t=>(e(),f(`div`,{class:`print-label`,key:`print-`+t.id},[u[15]||=p(`div`,{class:`print-label-header`},`记录仪设备标签`,-1),p(`div`,A,[p(`div`,j,r(t.serialNo),1)]),p(`div`,M,[p(`div`,N,[u[11]||=p(`span`,null,`序列号`,-1),p(`span`,null,r(t.serialNo),1)]),p(`div`,ee,[u[12]||=p(`span`,null,`设备名称`,-1),p(`span`,null,r(t.deviceName),1)]),p(`div`,P,[u[13]||=p(`span`,null,`所属单位`,-1),p(`span`,null,r(B.value.targetOrg),1)]),p(`div`,F,[u[14]||=p(`span`,null,`品牌型号`,-1),p(`span`,null,r(t.brand)+` `+r(t.model),1)])])]))),128))])])}}},[[`__scopeId`,`data-v-8089908e`]]);export{I as default};