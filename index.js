function cover(outerWidth, outerHeight, indeedWidth, indeedHeight) {
	if(outerWidth / outerHeight > indeedWidth / indeedHeight) {
		return {
			width: outerWidth,
			height: indeedHeight * outerWidth / indeedWidth
		};
	} else {
		return {
			height: outerHeight,
			width: indeedWidth * outerHeight / indeedHeight 
		};
	}
}

module.exports = {
	cover: cover
};
