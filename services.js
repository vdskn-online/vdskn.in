function applyService(serviceName) {

    const url =
        "apply.html?service=" +
        encodeURIComponent(serviceName);

    window.location.href = url;

}
