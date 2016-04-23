$(function () {
  
  var html = $('#cv').html();
  
  var content = {
    name: 'Nedostupov Alexandr',
    lidn: 'Студент отделения маркетинга',
    whyJob: 'Хочу учить фронтенд, потому что:',
    why1: 'Это первый путь к моей мечте',
    why2: 'Потому что это круто!',
    why3: 'Люблю работать по ночам:)',
    phone: '+309*40*90*7',
    soc: 'vk.com/re*dw*rld',
    fid: 'Могу почистить апельсин одной рукой:)'
  };
  
   var push = tmpl(html, content);
  
   $('body').append(push);
});