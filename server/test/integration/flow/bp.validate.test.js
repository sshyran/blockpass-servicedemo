const _config = require('../../../configs')
const blockpassSDKMock = require('../../../cores//blockpass/utils/_unitTestMock');

const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();

const BLOCKPASS_BASE_URL = _config.BLOCKPASS_BASE_URL;

const PROOF_LIST = {
    "phone": [
        {
            "parent": "8fe3d939a77cf7431f81f5c90293444e96b30417fab43d67674566af0f0d302b",
            "left": "cd5ea2c19e4e01ac28345749bc48882c299e2dbb2398b23e82531583f22fe59f",
            "right": "1fb9acd13760f238e64ea7bc87b776799c55a4a0b94bb68a7fc9be4930b1b1af"
        },
        {
            "parent": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651",
            "left": "8fe3d939a77cf7431f81f5c90293444e96b30417fab43d67674566af0f0d302b",
            "right": "5b43a0086ddc5aca1aae722ac5a8a328b8539af5e83ce7232802f075d718a696"
        },
        {
            "parent": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "left": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "right": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651"
        },
        {
            "parent": "01edf3645eef35d41b315523b5f62849f3ca0dbc07b3562d9245d9c7ce88a2bb",
            "left": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "right": "a28adb8671b32df77db8150fbfc5eb4ee98007abf2e2169e48f64ba06a9322d5"
        }
    ],
    "family_name": [
        {
            "parent": "39f6318193872600a9f2fccf4f4550bf58ab5c8ce18d43b7ad6b271b0997bd18",
            "left": "a151a3f75c2a0aa84d6c2c2ece9f451016458ff08ae8a707f99884c0f32dddde",
            "right": "f753816a733b198f8ce7cc0958c173c9465238c61d504745fe47976636857f25"
        },
        {
            "parent": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "left": "39f6318193872600a9f2fccf4f4550bf58ab5c8ce18d43b7ad6b271b0997bd18",
            "right": "27839301e7770397bc1c6fd12aa2303f9562f7149b3dc1fbbd273b4f1ffc4203"
        },
        {
            "parent": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "left": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "right": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651"
        },
        {
            "parent": "01edf3645eef35d41b315523b5f62849f3ca0dbc07b3562d9245d9c7ce88a2bb",
            "left": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "right": "a28adb8671b32df77db8150fbfc5eb4ee98007abf2e2169e48f64ba06a9322d5"
        }
    ],
    "given_name": [
        {
            "parent": "27839301e7770397bc1c6fd12aa2303f9562f7149b3dc1fbbd273b4f1ffc4203",
            "left": "68f8d9758f79ca004556781a4496e3623cba5bd132953f9aa72b72f6ccbb75ce",
            "right": "e9480fee741e3175971a81292057b60395b20ec55403e57c49bd2cfcb852185d"
        },
        {
            "parent": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "left": "39f6318193872600a9f2fccf4f4550bf58ab5c8ce18d43b7ad6b271b0997bd18",
            "right": "27839301e7770397bc1c6fd12aa2303f9562f7149b3dc1fbbd273b4f1ffc4203"
        },
        {
            "parent": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "left": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "right": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651"
        },
        {
            "parent": "01edf3645eef35d41b315523b5f62849f3ca0dbc07b3562d9245d9c7ce88a2bb",
            "left": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "right": "a28adb8671b32df77db8150fbfc5eb4ee98007abf2e2169e48f64ba06a9322d5"
        }
    ],
    "selfie": [
        {
            "parent": "5b43a0086ddc5aca1aae722ac5a8a328b8539af5e83ce7232802f075d718a696",
            "left": "8d893f917866f1ceebfafaf192c7980d93908eed7343fd750045ee01f8095d95",
            "right": "26aa9dc4f54b82fce8dbf6f8e3130520a423e2d6d4bffb654f8bff745ced19ef"
        },
        {
            "parent": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651",
            "left": "8fe3d939a77cf7431f81f5c90293444e96b30417fab43d67674566af0f0d302b",
            "right": "5b43a0086ddc5aca1aae722ac5a8a328b8539af5e83ce7232802f075d718a696"
        },
        {
            "parent": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "left": "6dbdc13d7bc9d2776211398e7059f2bd1870083a2a29448456a30adcc1c4ce00",
            "right": "672276ede571a3e4b461b53057b766b287c3d0e05bb003222c84a9a96bd72651"
        },
        {
            "parent": "01edf3645eef35d41b315523b5f62849f3ca0dbc07b3562d9245d9c7ce88a2bb",
            "left": "05d72fa347994a3ae0228d898ee55054975b2dfd7a6a30592e8ee06c0cfde1ac",
            "right": "a28adb8671b32df77db8150fbfc5eb4ee98007abf2e2169e48f64ba06a9322d5"
        }
    ]
}

describe("blockpass validation flow", function () {

    let token = '';
    before(done => {
        chai.sendLocalRequest()
            .post('/auth/login')
            .send({
                userName: 'admin',
                pass: 'admin'
            })
            .end((err, res) => {
                res.should.have.status(200);
                token = res.body.token;
                done();
            })
    })

    after(() => {
        blockpassSDKMock.clearAll();
    })

    it('[admin] validate proof of path', async function () {

        const kycId = '5addc3a70476a51e3c3f4290';

        blockpassSDKMock.mockQueryProofOfPath(BLOCKPASS_BASE_URL, {
            status: 'success',
            proofList: PROOF_LIST
        });

        const step1 = await chai.sendLocalRequest()
            .post('/blockpass/api/validate/proofPath')
            .set('Authorization', token)
            .send({
                id: kycId,
                slugList: ['phone', 'firstName', 'lastName']
            })
        console.log(step1.body)
        step1.body.rootCheck.should.not.equal(null);
        step1.body.rootCheck.forEach(itm => itm.isValid.should.equal(true))

        blockpassSDKMock.checkPending();
        
        return Promise.resolve();
    })

    it('[admin] validate proof of path accessToken refresh', async function () {

        const kycId = '5ad967142219d02223ae44b3';
        let isRefresh = false;

        blockpassSDKMock.mockQueryProofOfPath(BLOCKPASS_BASE_URL, {
            status: 'success',
            proofList: PROOF_LIST
        });
        blockpassSDKMock.mockQueryRefreshToken(BLOCKPASS_BASE_URL)

        const step1 = await chai.sendLocalRequest()
            .post('/blockpass/api/validate/proofPath')
            .set('Authorization', token)
            .send({
                id: kycId,
                slugList: ['phone']
            })
        console.log(step1.body)
        step1.body.rootCheck.should.not.equal(null);

        blockpassSDKMock.checkPending();


        return Promise.resolve();
    })

})