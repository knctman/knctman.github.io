const fs = require('fs')
const jwt = require('jsonwebtoken')

type TokenPayload = {
    dempa: string;
};

// 鍵をファイルから読み込み
const _privateKey = fs.readFileSync('jwtRS256.key', 'utf-8');
const _publicKey = fs.readFileSync('jwtRS256.key.pub', 'utf-8');

// トークン生成
const payload = {
    dempa: 'yunyun',
};
const expirationSeconds = 60 * 5;  // 有効期限5分 (秒)
const token = jwt.sign(payload, _privateKey, { expiresIn: expirationSeconds, algorithm: 'RS256' });

console.log('token ->', token);

// トークン検証
let decoded: TokenPayload;
try {
    decoded = jwt.verify(token, _publicKey, { algorithms: ['RS256'] }) as TokenPayload;
} catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
        console.error('トークンの有効期限が切れています。', e);
    } else if (e instanceof jwt.JsonWebTokenError) {
        console.error('トークンが不正です。', e);
    } else {
        console.error('トークンの検証でその他のエラーが発生しました。', e);
    }
    throw e;
}

console.log('decoded ->', decoded);