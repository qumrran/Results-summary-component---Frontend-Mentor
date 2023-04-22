fetch('./data.json')
	.then((response) => response.json())
	.then((jsonObj) => {
		const elements = document.querySelectorAll('.element');
		elements.forEach((element, index) => {
			const iconUrl = jsonObj[index].icon;
			const imgElement = document.createElement('img');
			imgElement.src = iconUrl;
			element.appendChild(imgElement);
			const categoryText = document.createElement('p');
			categoryText.textContent = jsonObj[index].category;
			element.appendChild(categoryText);
			const scoreDiv = document.createElement('div');
			scoreDiv.classList.add('newDiv');
			element.appendChild(scoreDiv);
			const scoreText = document.createElement('p');
			scoreText.textContent = jsonObj[index].score;
			scoreDiv.appendChild(scoreText);
			const totalScore = document.createElement('p');
			totalScore.textContent = '/100';
			totalScore.classList.add('grey');
			scoreDiv.appendChild(totalScore);
		});
	})
	.catch((error) => console.error(error));
