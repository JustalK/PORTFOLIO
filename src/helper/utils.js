module.exports = {
	add_class_to_element_delay(selector, newclass, delay) {
		setTimeout(() => {
			module.exports.add_class_to_element(selector, newclass);
		}, delay);
	},
	add_class_to_element(selector, newclass) {
		const element = document.querySelector(selector);
		element.classList.add(newclass);
	}
}
