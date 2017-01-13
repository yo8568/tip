//Simulate a tag a to trigger download click funtionally
exportGenerator (output, exportFileName) {
  if (navigator.userAgent.indexOf("Chrome") !== -1 || navigator.userAgent.indexOf("Firefox") !== -1) {
    const blob = new Blob([output], { type: 'text/csv' });
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    let url  = window.URL || window.webkitURL;
    a.href = url.createObjectURL(blob);
    a.download = exportFileName +'.csv';
    window.setTimeout(function () {
      a.click();
      window.URL.revokeObjectURL(url);
    }, 200);
  } else {
    let downloadContainer = angular.element('<div data-tap-disabled="true"><a></a></div>');
    const blob = new Blob([ 'Please use Chrome browser! \n'+ output], { type: 'text/csv' });
    let downloadLink = angular.element(downloadContainer.children()[0]);
    downloadLink.attr('href', window.URL.createObjectURL(blob));
    downloadLink.attr('download', exportFileName + '.csv');
    downloadLink.attr('target', '_blank');
    window.setTimeout(function () {
      downloadLink[0].click();
      downloadLink.remove();
    }, 200);
  }