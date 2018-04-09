import { MainMenu } from './src/component/MainMenu'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>