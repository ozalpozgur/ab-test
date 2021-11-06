function sa() {
	const qs = selector => document.querySelector(selector);
	const qsa = selector => document.querySelectorAll(selector);
	if (document.querySelectorAll('#sa').length === 0) {
		let hypeStyle = '<style id="sa">';
		hypeStyle += `
			
		`;
		hypeStyle += '</style>';
		document.head.insertAdjacentHTML('beforeend', hypeStyle);
	}

	const html = `
        
    `;

	document.body.insertAdjacentHTML('afterbegin', html);
}

hype.checkifloaded('', sa);
