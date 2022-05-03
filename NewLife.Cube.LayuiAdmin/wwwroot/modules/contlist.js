/** layuiAdmin.std-v1.2.0 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(["table","form"],function(t){var e=layui.$,a=layui.table,o=layui.form;a.render({elem:"#LAY-app-content-list",url:layui.setter.base+"json/content/list.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"文章ID",sort:!0},{field:"label",title:"文章标签",minWidth:100},{field:"title",title:"文章标题"},{field:"author",title:"作者"},{field:"uploadtime",title:"上传时间",sort:!0},{field:"status",title:"发布状态",templet:"#buttonTpl",minWidth:80,align:"center"},{title:"操作",minWidth:150,align:"center",fixed:"right",toolbar:"#table-content-list"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),a.on("tool(LAY-app-content-list)",function(l){var t=l.data;"del"===l.event?layer.confirm("确定删除此文章？",function(t){l.del(),layer.close(t)}):"edit"===l.event&&layer.open({type:2,title:"编辑文章",content:"../../../views/app/content/listform.html?id="+t.id,maxmin:!0,area:["550px","550px"],btn:["确定","取消"],yes:function(i,t){var e=window["layui-layer-iframe"+i],n=t.find("iframe").contents().find("#layuiadmin-app-form-edit");e.layui.form.on("submit(layuiadmin-app-form-edit)",function(t){var e=t.field;l.update({label:e.label,title:e.title,author:e.author,status:e.status}),o.render(),layer.close(i)}),n.trigger("click")}})}),a.render({elem:"#LAY-app-content-tags",url:layui.setter.base+"json/content/tags.js",cols:[[{type:"numbers",fixed:"left"},{field:"id",width:100,title:"ID",sort:!0},{field:"tags",title:"分类名",minWidth:100},{title:"操作",width:150,align:"center",fixed:"right",toolbar:"#layuiadmin-app-cont-tagsbar"}]],text:"对不起，加载出现异常！"}),a.on("tool(LAY-app-content-tags)",function(n){var i=n.data;if("del"===n.event)layer.confirm("确定删除此分类？",function(t){n.del(),layer.close(t)});else if("edit"===n.event){e(n.tr);layer.open({type:2,title:"编辑分类",content:"../../../views/app/content/tagsform.html?id="+i.id,area:["450px","200px"],btn:["确定","取消"],yes:function(t,e){var i=e.find("iframe").contents().find("#layuiadmin-app-form-tags").find('input[name="tags"]').val();i.replace(/\s/g,"")&&(n.update({tags:i}),layer.close(t))},success:function(t,e){t.find("iframe").contents().find("#layuiadmin-app-form-tags").click().find('input[name="tags"]').val(i.tags)}})}}),a.render({elem:"#LAY-app-content-comm",url:layui.setter.base+"json/content/comment.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"ID",sort:!0},{field:"reviewers",title:"评论者",minWidth:100},{field:"content",title:"评论内容",minWidth:100},{field:"commtime",title:"评论时间",minWidth:100,sort:!0},{title:"操作",width:150,align:"center",fixed:"right",toolbar:"#table-content-com"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),a.on("tool(LAY-app-content-comm)",function(e){e.data;"del"===e.event?layer.confirm("确定删除此条评论？",function(t){e.del(),layer.close(t)}):"edit"===e.event&&layer.open({type:2,title:"编辑评论",content:"../../../views/app/content/contform.html",area:["450px","300px"],btn:["确定","取消"],yes:function(e,t){var i=window["layui-layer-iframe"+e],n="layuiadmin-app-comm-submit",l=t.find("iframe").contents().find("#"+n);i.layui.form.on("submit("+n+")",function(t){t.field;a.reload("LAY-app-content-comm"),layer.close(e)}),l.trigger("click")},success:function(t,e){}})}),t("contlist",{})});