var params = {
    lines: [{
        background: '#00F',
        updateTime: 1000,
        elements: [{
            background: '#00F',
            width: 25
        },
            {
                background: '#00F',
                width: 50
            },
            {
                background: '#00F',
                width: 25
            },
        ]
    },
        {
            background: '#abf',
            updateTime: 2000,
            elements: [{
                    background: '#abf',
                    width: 20
                },
                {
                    background: '#abf',
                    width: 50
                },
                {
                    background: '#abf',
                    width: 30
                },
            ]
        },
        {
            background: '#abc',
            updateTime: 2000,
            elements: [{
                    background: '#abc',
                    width: 25
                },
                {
                    background: '#abc',
                    width: 25
                },
                {
                    background: '#abc',
                    width: 25
                },
                {
                    background: '#abc',
                    width: 25
                },
            ]
        },
        {
            background: '#dfa',
            updateTime: 2300,
            elements: [{
                    background: '#dfa',
                    width: 15
                },
                {
                    background: '#dfa',
                    width: 10
                },
                {
                    background: '#dfa',
                    width: 15
                },
                {
                    background: '#dfa',
                    width: 10
                },
                {
                    background: '#dfa',
                    width: 10
                },
                {
                    background: '#dfa',
                    width: 20
                },
                {
                    background: '#dfa',
                    width: 20
                },
                {
                    background: '#dfa',
                    width: 10
                }
            ]
        }
    ]
};

getRandomColor = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function RenderLines(parameters, parentElement) {
    this.linesArray = parameters.lines;
    this.lineHeight = window.innerHeight / this.linesArray.length;
    let self = this;

    this.renderLine = function (line, backgroundEl, windowEl, heightEl) {
        let domLine = self.createElem(line, backgroundEl, windowEl, heightEl, 'line-item');

        line.elements.map(function(item) {
            let lineElem = self.createElem(item, item.background, item.width, heightEl);
            setInterval(function() {
                lineElem.style.backgroundColor = getRandomColor();
            }, line.updateTime);
            domLine.appendChild(lineElem);
        });

        return domLine;
    };
    
    this.createElem = function (elem, backgroundEl, widthEl, heightEl, classEl) {
        let domElem = document.createElement("div");
        domElem.style.backgroundColor = backgroundEl;
        domElem.style.width = widthEl + "%";
        domElem.style.height = heightEl + 'px';

        if (classEl) {
            domElem.className = classEl;
        }
        return domElem;
    };

    this.init = function() {
        this.linesArray.map(function(line) {
            parentElement.appendChild(self.renderLine(line, line.background, 100, self.lineHeight));
        });
    };
};

window.onload = function() {
    let lines = new RenderLines(params, document.getElementById('app'));
    lines.init();
};
