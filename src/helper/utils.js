module.exports = {
	class_to_elements_increase(ref_elements, newclass, min, increase, fc) {
		const elements = [...ref_elements];
		elements.map((element, index) => {
			setTimeout(() => {
				fc(element, newclass);
			}, min + index * increase);
		});
	},
	add_class_to_elements_increase(ref_elements, newclass, min, increase) {
		module.exports.class_to_elements_increase(
			ref_elements,
			newclass,
			min,
			increase,
			module.exports.add_class_to_element
		);
	},
	add_class_to_element_delay(element, newclass, delay) {
		setTimeout(() => {
			module.exports.add_class_to_element(element, newclass);
		}, delay);
	},
	toggle_class_to_element(element, newclass) {
		if (element.classList.contains(newclass)) {
			element.classList.remove(newclass);
		} else {
			element.classList.add(newclass);
		}
	},
	add_class_to_element(element, newclass) {
		element.classList.add(newclass);
	},
	remove_class_to_element(element, newclass) {
		element.classList.remove(newclass);
	},
	is_array_empty(array) {
		return array === null || array.length === 0;
	},
	absolute_path_from_relative(path) {
		return module.exports.get_server_address() + '/' + path;
	},
	get_server_address() {
		const port = process.env.PORT ? ':' + process.env.PORT : '';
		return process.env.PROTOCOL + '://' + window.location.hostname + port;
	},
	/**
	 * Calculate the width and height of an object located at certain "distance" of the camera
	 * in order for the object to be fullscreen
	 * @param {Object} camera the camera to use for the calculation
	 * @param {Number} distance The distance of the object from the camera
	 * @returns {[Number, Number]} The width and height of the object for being fullscreen
	 */
	getWidthAndHeight(camera, distance) {
		const viewFOV = (camera.fov * Math.PI) / 180;
		var height = 2 * Math.tan(viewFOV / 2) * distance;
		var width = height * camera.aspect;
		return [width, height];
	}
};
