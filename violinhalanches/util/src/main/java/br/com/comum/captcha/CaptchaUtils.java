package br.com.comum.captcha;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;

import br.com.comum.cripto.Criptografador;
import jj.play.ns.nl.captcha.CaptchaBean;
import jj.play.ns.nl.captcha.backgrounds.BackgroundProducer;
import jj.play.ns.nl.captcha.backgrounds.FlatColorBackgroundProducer;
import jj.play.ns.nl.captcha.noise.NoiseProducer;
import jj.play.ns.nl.captcha.noise.StraightLineNoiseProducer;
import jj.play.ns.nl.captcha.text.producer.DefaultTextProducer;

public class CaptchaUtils {

	public static Map<String,CaptchaBean> hash = new HashMap<String,CaptchaBean>();
	
	public static CaptchaBean getInstance() {
		CaptchaBean instance = new CaptchaBean(200, 50);
		instance.setTxtProd(new DefaultTextProducer());
		NoiseProducer noiseProducer = new StraightLineNoiseProducer();
		BackgroundProducer producer = new FlatColorBackgroundProducer(Color.YELLOW);
		instance.setBgProd(producer);
		instance.setAddBorder(true);
		instance.setNoiseProd(noiseProducer);
		instance.build();
		hash.put(instance.getAnswer(), instance);
		return instance;
	}
	
	private static CaptchaBean getFromHash(Object key) {
		CaptchaBean captcha = hash.get(key);
		hash.remove(key);
		return captcha;
	}
	
	public static BufferedImage getImage(String key) {
		return getFromHash(Criptografador.decodeBase64(key)).getImage();
	}
	
}
