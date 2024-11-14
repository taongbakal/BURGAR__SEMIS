
function OtherAnswers(clickedQuestion) {
    const faqCard = clickedQuestion.closest('.faq1_content1');
    if (faqCard) {
        const otherQuestions = faqCard.querySelectorAll('.faq1_content1--text h3');
        otherQuestions.forEach(question => {
            if (question !== clickedQuestion) {
                const ddown = question.nextElementSibling;
                if (ddown && ddown.tagName === 'P') {
                    ddown.classList.remove('open');
                }
                const dd = question.querySelector('i');
                if (dd) {
                    dd.classList.remove('open');
                }
            }
        });
    }
}
const questions = document.querySelectorAll(".faq1_content1--text h3");
questions.forEach(question => {
    question.addEventListener("click", () => {
        
        const answer = question.nextElementSibling;
        if (answer && answer.tagName === 'P') {
            answer.classList.toggle('open');
        }
        const dd = question.querySelector('i');
        if (dd) {
            dd.classList.toggle('open');
        }
        OtherAnswers(question);
    });
});

function firstDropdowns() {
    const contentSections = document.querySelectorAll('.faq2_content2');
    contentSections.forEach(section => {

        const firstQuestion = section.querySelector('.faq2_content2--text h3');
        if (firstQuestion) {
            const answer = firstQuestion.nextElementSibling;
            if (answer && answer.tagName === 'P') {
                answer.classList.add('open');
            }
            const dd = firstQuestion.querySelector('i');
            if (dd) {
                dd.classList.add('open');
            }
        }
    });
}

function AMFaq2(element) {
    const sign = element.querySelector('.h');
    const paragraph = element.querySelector('p');
    const allParagraphs = document.querySelectorAll('.faq2_content2 p');
    const allSigns = document.querySelectorAll('.faq2_content2.h');
    allParagraphs.forEach(p => {
        if (p !== paragraph) {
            p.classList.remove('open');
        }
    });
    allSigns.forEach(s => {
        if (s !== sign) {
            s.textContent = '+';
        }
    });
    paragraph.classList.toggle('open');
    sign.textContent = paragraph.classList.contains('open') ? '-' : '+';
}
firstDropdowns();
