const {
    QBoxLayout,
    Direction,
    AlignmentFlag,
    QTextEdit,
    QLineEdit,
    QIcon,
    QSize,
    QWidget,
    QPushButton,
} = require("@nodegui/nodegui")


class Input extends QWidget {
    constructor (buttonText, placeholderText) {
        super()

        const input = new QLineEdit()
        const inputLayout = new QBoxLayout(Direction.LeftToRight)

        const button = new QPushButton()

        button.setText(buttonText)
        button.addEventListener('clicked', () => console.log('Paste clicked'))
        button.setInlineStyle('margin: 25px 40px 20px 0px;')
        button.setFixedHeight(80)

        input.setFixedHeight(80)
        input.setInlineStyle('border : none; margin: 25px 0px 20px 40px;')
        input.setPlaceholderText(placeholderText)

        inputLayout.addWidget(input)
        inputLayout.setSpacing(0)
        inputLayout.addWidget(button)

        this.setLayout(inputLayout)
        this.setInlineStyle('border : 1px solid silver; border-radius : 6px; margin: 25px 40px 20px 40px;')
    }
}

module.exports = Input